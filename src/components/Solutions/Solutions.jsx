import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Solutions.module.css';
import solutionData from '../../data/solutionCategories.json';

export default function Home() {
  const location = useLocation();
  const [activeCategories, setActiveCategories] = useState(['management']);
  const [expandedCategories, setExpandedCategories] = useState(['management']);
  const [activeProduct, setActiveProduct] = useState(null);

  const productCategories = solutionData.solutionCategories.map(category => ({
    ...category,
    products: category.solutions
  }));

  useEffect(() => {
    // Scroll to top when component mounts or navigation state changes
    window.scrollTo(0, 0);
    
    // Check if navigation state contains a selected category
    const selectedCategory = location.state?.selectedCategory;
    
    if (selectedCategory) {
      // Set the selected category as active and expanded
      setActiveCategories([selectedCategory]);
      setExpandedCategories([selectedCategory]);
      
      // Find the category and set the first product as active
      const category = productCategories.find(cat => cat.id === selectedCategory);
      if (category && category.products.length > 0) {
        setActiveProduct(category.products[0]);
      }
    } else {
      // Default behavior - set the first product as active
      if (productCategories.length > 0 && productCategories[0].products.length > 0) {
        setActiveProduct(productCategories[0].products[0]);
      }
    }
  }, [location.state]);

  const handleCategoryClick = (categoryId) => {
    // Toggle active state
    setActiveCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );

    // Toggle expanded state
    setExpandedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };



  return (
    <div className={styles.productsPage}>
      <h1 className={styles.title}>解决方案</h1>
      <p className={styles.description}>
        基于多年行业经验，我们为不同规模的企业量身定制智能会议解决方案。
        从会议云服务管理到移动端应用，我们的综合性解决方案覆盖会议全流程，助力您的组织实现高效协作。
      </p>

      <div className={styles.layoutContainer}>
        {/* Navigation */}
        <nav className={styles.navigation}>
          <div className={styles.categoryNav}>
            {productCategories.map((category) => (
              <div key={category.id} className={styles.categoryWrapper}>
                <div
                  className={`${styles.categoryItem} ${activeCategories.includes(category.id) ? styles.active : ''
                    } ${expandedCategories.includes(category.id) ? styles.expanded : ''}`}
                  onClick={() => handleCategoryClick(category.id)}
                >
                  {category.name}
                </div>

                {/* Dropdown Menu */}
                {expandedCategories.includes(category.id) && (
                  <div className={styles.dropdown}>
                    {category.products.map((product, index) => (
                      <div
                        key={index}
                        className={`${styles.productItem} ${activeProduct && activeProduct.name === product.name ? styles.activeProduct : ''}`}
                        onClick={() => setActiveProduct(product)}
                      >
                        <div className={styles.productTitle}>{product.name}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>

        {/* Content Area */}
        <div className={styles.contentArea}>
          {activeProduct && activeProduct.pdf ? (
            <iframe
            title='PDF Viewer'
              src={`${activeProduct.pdf}#zoom=120&toolbar=0&navpanes=0&scrollbar=0&pagemode=none&bgcolor=ffffff`}
              className={styles.pdfViewer}
            />
          ) : (
            <div className={styles.contentPlaceholder}>
              <div className={styles.placeholderTitle}>解决方案文档暂未准备好</div>
              <div className={styles.placeholderText}>该解决方案的详细文档正在准备中，敬请期待</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}