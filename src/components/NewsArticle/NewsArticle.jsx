import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './NewsArticle.module.css';

export default function NewsArticle({ setShowFooter }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [readTime] = useState(() => Math.floor(Math.random() * 2) + 2); // 2-3 minutes
  const [relatedArticles, setRelatedArticles] = useState([]);
  
  useEffect(() => {
    if (setShowFooter) {
      setShowFooter(true);
    }
    window.scrollTo(0, 0);
  }, [setShowFooter]);

  useEffect(() => {
    const loadArticle = async () => {
      try {
        setLoading(true);
        const articleModule = await import(`../../data/articles/article-${id}.json`);
        setArticle(articleModule.default);
        
        // Load related articles (3 random articles excluding current one)
        const allArticleIds = [1, 2, 3, 4, 5, 6];
        const otherArticleIds = allArticleIds.filter(articleId => articleId !== parseInt(id));
        const shuffled = otherArticleIds.sort(() => 0.5 - Math.random());
        const selectedIds = shuffled.slice(0, 3);
        
        const relatedPromises = selectedIds.map(async (articleId) => {
          try {
            const module = await import(`../../data/articles/article-${articleId}.json`);
            return { id: articleId, ...module.default };
          } catch {
            return null;
          }
        });
        
        const related = await Promise.all(relatedPromises);
        setRelatedArticles(related.filter(article => article !== null));
        
      } catch (err) {
        setError('文章未找到');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadArticle();
    }
  }, [id]);

  if (loading) {
    return (
      <div className={styles.articlePage}>
        <div className={styles.container}>
          <div className={styles.loading}>
            <h1>加载中...</h1>
          </div>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className={styles.articlePage}>
        <div className={styles.container}>
          <div className={styles.notFound}>
            <h1>文章未找到</h1>
            <p>您访问的新闻文章不存在。</p>
            <button 
              onClick={() => navigate('/news')}
              className={styles.backButton}
            >
              返回新闻列表
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.articlePage}>
      <div className={styles.container}>
        {/* Article Title */}
        <h1 className={styles.title}>{article.title}</h1>
        
        {/* Meta Info */}
        <div className={styles.meta}>
          <span className={styles.author}>作者：{article.author || '会智科技'}</span>
          <span className={styles.separator}>|</span>
          <span className={styles.date}>发布时间：{article.date}</span>
          <span className={styles.separator}>|</span>
          <span className={styles.readTime}>阅读时间：{readTime} 分钟</span>
        </div>
        
        {/* Hero Image */}
        <img 
          src={article.image}
          alt={article.title}
          className={styles.heroImage}
        />
        
        {/* Article Content */}
        <div className={styles.content}>
          {article.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
        
        {/* Optional Bottom Media */}
        {article.bottomImage && (
          <div className={styles.bottomMedia}>
            <img 
              src={article.bottomImage}
              alt="相关图片"
              className={styles.bottomImage}
            />
            {article.bottomImageCaption && (
              <p className={styles.imageCaption}>{article.bottomImageCaption}</p>
            )}
          </div>
        )}
        
        {article.bottomVideo && (
          <div className={styles.bottomMedia}>
            <video 
              src={article.bottomVideo}
              controls
              className={styles.bottomVideo}
            >
              您的浏览器不支持视频播放。
            </video>
            {article.bottomVideoCaption && (
              <p className={styles.videoCaption}>{article.bottomVideoCaption}</p>
            )}
          </div>
        )}
        
        
      </div>
      
      {/* Related Articles Section with darker background */}
      {relatedArticles.length > 0 && (
        <div className={styles.relatedSection}>
          <div className={styles.container}>
            <h2 className={styles.relatedTitle}>相关文章</h2>
            <div className={styles.relatedGrid}>
              {relatedArticles.map((relatedArticle) => (
                <div 
                  key={relatedArticle.id}
                  className={styles.relatedCard}
                  onClick={() => navigate(`/news/${relatedArticle.id}`)}
                >
                  <img 
                    src={relatedArticle.image}
                    alt={relatedArticle.title}
                    className={styles.relatedImage}
                  />
                  <h3 className={styles.relatedCardTitle}>{relatedArticle.title}</h3>
                  <p className={styles.relatedCardDate}>{relatedArticle.date}</p>
                </div>
              ))}
            </div>
            
            {/* Back Button */}
            <button 
              onClick={() => navigate('/news')}
              className={styles.backButton}
            >
              ← 返回新闻列表
            </button>
          </div>
        </div>
      )}
      
      {/* If no related articles, still show back button with darker background */}
      {relatedArticles.length === 0 && (
        <div className={styles.relatedSection}>
          <div className={styles.container}>
            <button 
              onClick={() => navigate('/news')}
              className={styles.backButton}
            >
              ← 返回新闻列表
            </button>
          </div>
        </div>
      )}
      </div>
  );
}