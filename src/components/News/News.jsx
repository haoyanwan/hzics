import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './News.module.css';
import newsData from '../../data/companyNews.json';

export default function News({ setShowFooter }) {
  const [selectedNewsIndex, setSelectedNewsIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const featuredNews = newsData.news[selectedNewsIndex];
  const newsList = newsData.news.slice(0, 6);
  const subFeaturedNews = newsData.news.slice(1, 4);
  // Use different news items for company updates or repeat if not enough
  const companyUpdates = newsData.news.length > 6 ? newsData.news.slice(6) : newsData.news.slice(0, 4);

  // Check if screen is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (setShowFooter) {
      setShowFooter(true);
    }
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [setShowFooter]);

  const handleNewsClick = (index) => {
    setSelectedNewsIndex(index);
  };

  const handlePrevCard = () => {
    setCurrentCardIndex(prev => prev === 0 ? newsList.length - 1 : prev - 1);
  };

  const handleNextCard = () => {
    setCurrentCardIndex(prev => (prev + 1) % newsList.length);
  };

  return (
    <div className={styles.newsPage}>
      <div className={styles.container}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>公司新闻</h1>
          <p className={styles.pageSubtitle}>
            了解会智科技最新发展动态、产品发布和重要活动
          </p>
        </div>

        {/* Desktop: Main news section with featured article and navigation */}
        {!isMobile ? (
          <div className={styles.mainNewsSection}>
          {/* Featured article on the left */}
          <div className={styles.featuredArticle}>
            <div className={styles.featuredImageContainer}>
              <img 
                src={featuredNews.image}
                alt={featuredNews.imageAlt}
                className={styles.featuredImage}
              />
            </div>
            <div className={styles.featuredContent}>
              <div className={styles.featuredMeta}>
                <span className={styles.featuredDate}>{featuredNews.date}</span>
                <span className={styles.featuredCategory}>{featuredNews.category}</span>
              </div>
              <h2 className={styles.featuredTitle}>{featuredNews.title}</h2>
              <p className={styles.featuredSummary}>{featuredNews.summary}</p>
              <Link to={featuredNews.link} className={styles.readMoreButton}>
                阅读更多
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14"/>
                  <path d="m12 5 7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* News navigation list on the right */}
          <div className={styles.newsNavigation}>
            <ul className={styles.newsList}>
              {newsList.map((news, index) => (
                <li key={news.id} className={styles.newsListItem}>
                  <button 
                    className={`${styles.newsListLink} ${index === selectedNewsIndex ? styles.active : ''}`}
                    onClick={() => handleNewsClick(index)}
                  >
                    <div className={styles.newsListContent}>
                      <span className={styles.newsListDate}>{news.date}</span>
                      <span className={styles.newsListTitle}>{news.title}</span>
                    </div>
                    <svg className={styles.chevronIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        ) : (
          /* Mobile: Card carousel section */
          <div className={styles.mobileNewsSection}>
            <div className={styles.mobileCardCarousel}>
              <div className={styles.mobileCard}>
                <div className={styles.mobileCardImage}>
                  <img 
                    src={newsList[currentCardIndex].image}
                    alt={newsList[currentCardIndex].imageAlt}
                  />
                </div>
                <div className={styles.mobileCardContent}>
                  <div className={styles.mobileCardMeta}>
                    <span className={styles.mobileCardDate}>{newsList[currentCardIndex].date}</span>
                    <span className={styles.mobileCardCategory}>{newsList[currentCardIndex].category}</span>
                  </div>
                  <h3 className={styles.mobileCardTitle}>{newsList[currentCardIndex].title}</h3>
                  <p className={styles.mobileCardSummary}>{newsList[currentCardIndex].summary}</p>
                  <Link to={newsList[currentCardIndex].link} className={styles.mobileReadMore}>
                    阅读更多 →
                  </Link>
                </div>
              </div>
              
              {/* Navigation dots and arrows */}
              <div className={styles.mobileCardNav}>
                <button onClick={handlePrevCard} className={styles.mobileNavArrow}>←</button>
                <div className={styles.mobileCardDots}>
                  {newsList.map((_, index) => (
                    <button
                      key={index}
                      className={`${styles.dot} ${currentCardIndex === index ? styles.activeDot : ''}`}
                      onClick={() => setCurrentCardIndex(index)}
                    />
                  ))}
                </div>
                <button onClick={handleNextCard} className={styles.mobileNavArrow}>→</button>
              </div>
            </div>
          </div>
        )}

        {/* Sub-featured articles section - Desktop only */}
        {!isMobile && (
          <div className={styles.subFeaturedSection}>
          {subFeaturedNews.map((news) => (
            <article key={news.id} className={styles.subFeaturedArticle}>
              <div className={styles.subFeaturedImageContainer}>
                <img 
                  src={news.image}
                  alt={news.imageAlt}
                  className={styles.subFeaturedImage}
                />
              </div>
              <div className={styles.subFeaturedContent}>
                <div className={styles.subFeaturedMeta}>
                  <span className={styles.subFeaturedDate}>{news.date}</span>
                  <span className={styles.subFeaturedCategory}>{news.category}</span>
                </div>
                <h3 className={styles.subFeaturedTitle}>{news.title}</h3>
                <p className={styles.subFeaturedSummary}>{news.summary}</p>
                <Link to={news.link} className={styles.readMoreButtonSmall}>
                  阅读更多
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
        )}

        {/* No results message */}
        {newsData.news.length === 0 && (
          <div className={styles.noResults}>
            <div className={styles.noResultsIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M16 16s-1.5-2-4-2-4 2-4 2"/>
                <line x1="9" y1="9" x2="9.01" y2="9"/>
                <line x1="15" y1="9" x2="15.01" y2="9"/>
              </svg>
            </div>
            <h3>暂无相关新闻</h3>
            <p>请尝试调整搜索词或选择其他分类</p>
          </div>
        )}
      </div>

      {/* Company updates section with different background */}
      <div className={styles.companyUpdatesSection}>
        <div className={styles.container}>
          <h2 className={styles.companyUpdatesTitle}>公司动态</h2>
          <p className={styles.companyUpdatesSubtitle}>了解会智科技最新发展和重要活动</p>
          
          {!isMobile ? (
            /* Desktop: Gallery view */
            <div className={styles.companyUpdatesGallery}>
              {companyUpdates.map((update) => (
                <Link key={update.id} to={update.link} className={styles.updateItem}>
                  <img 
                    src={update.image}
                    alt={update.imageAlt}
                    className={styles.updateImage}
                  />
                  <h3 className={styles.updateTitle}>{update.title}</h3>
                  <div className={styles.updateDate}>{update.date}</div>
                </Link>
              ))}
            </div>
          ) : (
            /* Mobile: Story-style circles */
            <div className={styles.mobileStoriesSection}>
              <div className={styles.storiesContainer}>
                {companyUpdates.map((update) => (
                  <Link key={update.id} to={update.link} className={styles.storyItem}>
                    <div className={styles.storyCircle}>
                      <img 
                        src={update.image}
                        alt={update.imageAlt}
                        className={styles.storyImage}
                      />
                    </div>
                    <p className={styles.storyTitle}>{update.title.substring(0, 8)}...</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}