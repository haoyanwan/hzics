import styles from './SolutionsSection.module.css';

export default function SolutionsSection() {
  const solutions = [
    {
      id: 1,
      logo: "☁️",
      title: "会议云服务后台管理系统",
      description: "智能会议云服务后台管理系统是基于JavaEE技术的企业级云平台管理系统，以其安全稳定、强大易用、高效专业等优势赢得了用户的广泛好评。"
    },
    {
      id: 2,
      logo: "🧭",
      title: "智能会议事务管控子系统",
      description: "智能会议事务管控子系统依托全新的设计理念，为会议事务管理组织创建高效协同办公体系，适用于签到、就餐、分房、接机/车等多场景。"
    },
    {
      id: 3,
      logo: "✅",
      title: "智能会议现场签到子系统",
      description: "智能会议现场签到系统支持在线与离线模式，身份证、RFID、指纹、二维码等多种签到方式，可根据会议需求灵活配置，方便快捷。"
    },
    {
      id: 4,
      logo: "📅",
      title: "智能会议议程管理子系统",
      description: "采用无线平板互联模式，使用websocket实时双向通信技术，执行议程可自动计时实时调整，并同时发起多项议项。"
    },
    {
      id: 5,
      logo: "💳",
      title: "智能会议证卡制作子系统",
      description: "支持多元化卡片样式设计，可保存为模板并重新调用，支持人员基础数据云、动态数据格式，快速筛选人员制卡，数据批量导入导出。"
    },
    {
      id: 6,
      logo: "📱",
      title: "智能会议移动服务子系统",
      description: "通过移动APP、微信服务可随时查看会议相关数据，支持快速筛选、精准搜索，第一时间掌握最新会议资讯。"
    }
  ];

  const products = [
    {
      id: 1,
      title: "智能会议管理平台",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 2,
      title: "数据分析仪表盘",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
    },
    {
      id: 3,
      title: "安全认证系统",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 4,
      title: "云端协作工具",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  const handleViewMore = (solutionId) => {
    // Placeholder for future implementation
    console.log(`View more details for solution ${solutionId}`);
  };

  const handleLearnMore = (productId) => {
    // Placeholder for future implementation
    console.log(`Learn more about product ${productId}`);
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
              onClick={() => handleViewMore(solution.id)}
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
                onClick={() => handleLearnMore(product.id)}
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