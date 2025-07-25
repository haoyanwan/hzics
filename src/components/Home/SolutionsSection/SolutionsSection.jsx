import { useNavigate } from 'react-router-dom';
import styles from './SolutionsSection.module.css';
import solutionData from '../../../data/solutionCategories.json';
import productData from '../../../data/productCategories.json';

export default function SolutionsSection() {
  const navigate = useNavigate();
  
  // Map solution categories from data with appropriate icons
  const categoryIcons = {
    'management': '☁️',
    'signing': '✅', 
    'interactive': '🗳️',
    'mobile': '📱',
    'analytics': '📊',
    'hardware': '🔧'
  };

  const solutions = solutionData.solutionCategories.map(category => ({
    id: category.id,
    logo: categoryIcons[category.id] || '⚙️',
    title: category.name,
    description: getSolutionDescription(category.id),
    categoryId: category.id
  }));

  function getSolutionDescription(categoryId) {
    const descriptions = {
      'management': '全面的会议管理解决方案，涵盖会议全流程管理，基于JavaEE技术的企业级云平台管理系统，以其安全稳定、强大易用、高效专业等优势赢得了用户的广泛好评。',
      'signing': '多样化签到认证方式，保障会议安全与便捷。支持在线与离线模式，身份证、RFID、指纹、二维码等多种签到方式，可根据会议需求灵活配置。',
      'interactive': '丰富的互动功能，提升会议参与度和效果。提供无线投票表决、在线问答、实时讨论等多种互动方式，增强会议的参与性和决策效率。',
      'mobile': '移动端完整解决方案，随时随地管理会议。通过移动APP、微信服务可随时查看会议相关数据，支持快速筛选、精准搜索，第一时间掌握最新会议资讯。',
      'analytics': '深度数据分析，为决策提供科学依据。全面的参会数据分析报告、智能报表生成、趋势分析等功能，助力科学决策。',
      'hardware': '专业硬件设备，构建稳定可靠的会议环境。包括智能证卡制作设备、RFID读写设备、会议显示设备等专业硬件解决方案。'
    };
    return descriptions[categoryId] || '专业会议解决方案';
  }

  // Get individual products from different categories with appropriate images
  const productImages = [
    "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  ];

  // Select 4 individual products from different categories
  const allProducts = productData.productCategories.flatMap(category => 
    category.products.map(product => ({
      ...product,
      categoryId: category.id,
      categoryName: category.name
    }))
  );

  // Select 4 products: first product from each of the first 4 categories
  const products = productData.productCategories.slice(0, 4).map((category, index) => {
    const product = category.products[0]; // Take first product from each category
    return {
      id: index + 1,
      name: product.name,
      title: product.name,
      description: product.description,
      categoryId: category.id,
      categoryName: category.name,
      image: productImages[index],
      productIndex: 0 // Index within the category
    };
  });

  const handleViewMore = (solution) => {
    // Navigate to solutions page with the specific category preselected
    navigate('/solutions', { state: { selectedCategory: solution.categoryId } });
  };

  const handleLearnMore = (product) => {
    // Navigate to products page with the specific product preselected
    navigate('/products', { 
      state: { 
        selectedCategory: product.categoryId,
        selectedProductName: product.name
      } 
    });
  };

  return (
    <section className={styles.solutions}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>我们的解决方案</h2>
        <p className={styles.sectionDescription}>
          凭借多年的行业经验和技术创新，我们为企业提供全方位的会议管理解决方案，
          从智能化工具到专业服务，助力您的每一次会议都能取得最佳效果。
        </p>
      </div>

      <div className={styles.solutionsGrid}>
        {solutions.map((solution) => (
          <div key={solution.id} className={styles.solutionCard}>
            <div className={styles.logoContainer}>
              <span className={styles.logo}>{solution.logo}</span>
            </div>
            <h3 className={styles.solutionTitle}>{solution.title}</h3>
            <p className={styles.solutionDescription}>{solution.description}</p>
            <button
              className={styles.viewMoreButton}
              onClick={() => handleViewMore(solution)}
            >
              了解更多
            </button>
          </div>
        ))}
      </div>

      <div className={styles.productsHeader}>
        <h2 className={styles.sectionTitle}>我们的产品</h2>
        <p className={styles.sectionDescription}>
          精心打造的产品系列，为您的业务需求提供完整的技术解决方案，
          助力企业数字化转型和智能化升级。
        </p>
      </div>

      <div className={styles.productsGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <div 
              className={styles.productImageContainer}
              style={{ backgroundImage: `url(${product.image})` }}
            >
              <div className={styles.productImageNumber}>{product.id}</div>
            </div>
            <div className={styles.productFooter}>
              <h3 className={styles.productTitle}>{product.title}</h3>
              <button
                className={styles.learnMoreButton}
                onClick={() => handleLearnMore(product)}
              >
                了解更多
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}