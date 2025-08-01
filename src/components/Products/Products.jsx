import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Products.module.css';
import productData from '../../data/productCategories.json';

export default function Products() {
  const location = useLocation();
  const [activeCategories, setActiveCategories] = useState(['management']);
  const [expandedCategories, setExpandedCategories] = useState(['management']);
  const [activeProduct, setActiveProduct] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const productCategories = productData.productCategories;

  // Flatten all products for mobile navigation
  const allProducts = productCategories.flatMap(category => 
    category.products.map(product => ({
      ...product,
      categoryName: category.name
    }))
  );

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
    // Scroll to top when component mounts or navigation state changes
    window.scrollTo(0, 0);
    
    // Check if navigation state contains a selected category and/or product
    const selectedCategory = location.state?.selectedCategory;
    const selectedProductName = location.state?.selectedProductName;
    
    if (selectedCategory) {
      // Set the selected category as active and expanded
      setActiveCategories([selectedCategory]);
      setExpandedCategories([selectedCategory]);
      
      // Find the category and set the specific product as active
      const category = productCategories.find(cat => cat.id === selectedCategory);
      if (category && category.products.length > 0) {
        if (selectedProductName) {
          // Find the specific product by name
          const specificProduct = category.products.find(product => product.name === selectedProductName);
          if (specificProduct) {
            setActiveProduct(specificProduct);
          } else {
            setActiveProduct(category.products[0]); // Fallback to first product
          }
        } else {
          setActiveProduct(category.products[0]); // Default to first product in category
        }
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

  // Mobile navigation functions
  const getCurrentProductIndex = () => {
    if (!activeProduct) return 0;
    return allProducts.findIndex(product => product.name === activeProduct.name);
  };

  const handlePreviousProduct = () => {
    const currentIndex = getCurrentProductIndex();
    const newIndex = currentIndex === 0 ? allProducts.length - 1 : currentIndex - 1;
    setActiveProduct(allProducts[newIndex]);
  };

  const handleNextProduct = () => {
    const currentIndex = getCurrentProductIndex();
    const newIndex = (currentIndex + 1) % allProducts.length;
    setActiveProduct(allProducts[newIndex]);
  };



  return (
    <div className={styles.productsPage}>
      <h1 className={styles.title}>产品中心</h1>
      <p className={styles.description}>
        探索我们精心打造的智能会议产品系列，为您的企业提供全面的会议管理解决方案。
        从智能签到系统到多媒体会议平台，每一个产品都经过精心设计，旨在提升会议效率和用户体验。
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
                {expandedCategories.includes(category.id) && (
                  <div className={styles.productList}>
                    {category.products.map((product, index) => (
                      <div
                        key={index}
                        className={`${styles.productItem} ${activeProduct === product ? styles.active : ''
                          }`}
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
          {/* Mobile Product Header */}
          {isMobile && activeProduct && (
            <div className={styles.mobileProductHeader}>
              <h2 className={styles.mobileProductTitle}>{activeProduct.name}</h2>
              <p className={styles.mobileProductCategory}>{activeProduct.categoryName}</p>
            </div>
          )}

          {activeProduct && activeProduct.pdf ? (
            <iframe
            title='PDF Viewer'
              src={`${activeProduct.pdf}#zoom=120&toolbar=0&navpanes=0&scrollbar=0&pagemode=none&bgcolor=ffffff`}
              className={styles.pdfViewer}
            />
          ) : (
            <div className={styles.contentPlaceholder}>
              <div className={styles.placeholderTitle}>文档暂未准备好</div>
              <div className={styles.placeholderText}>该产品的详细文档正在准备中，敬请期待</div>
            </div>
          )}

          {/* Mobile Navigation */}
          {isMobile && (
            <div className={styles.mobileNavigation}>
              <button 
                className={styles.mobileNavButton}
                onClick={handlePreviousProduct}
              >
                上一个
              </button>
              <div className={styles.mobileNavIndicator}>
                {getCurrentProductIndex() + 1} / {allProducts.length}
              </div>
              <button 
                className={styles.mobileNavButton}
                onClick={handleNextProduct}
              >
                下一个
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}