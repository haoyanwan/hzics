import { useState, useEffect } from 'react';
import styles from './Products.module.css';
import productData from '../../data/productCategories.json';

export default function Products() {
  const [activeCategories, setActiveCategories] = useState(['management']);
  const [expandedCategories, setExpandedCategories] = useState(['management']);
  const [activeProduct, setActiveProduct] = useState(null);

  const productCategories = productData.productCategories;

  useEffect(() => {
    // Set the first product as active by default
    if (productCategories.length > 0 && productCategories[0].products.length > 0) {
      setActiveProduct(productCategories[0].products[0]);
    }
  }, []);

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
              <div className={styles.placeholderTitle}>文档暂未准备好</div>
              <div className={styles.placeholderText}>该产品的详细文档正在准备中，敬请期待</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}