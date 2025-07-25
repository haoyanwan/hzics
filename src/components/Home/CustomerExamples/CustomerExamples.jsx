import { useState, useEffect } from 'react';
import styles from './CustomerExamples.module.css';

export default function CustomerExamples() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const customerExamples = [
    {
      id: 1,
      title: "国际科技峰会2024",
      company: "华为技术有限公司",
      description: "为期三天的全球科技创新大会，汇聚来自50多个国家的技术专家和行业领袖，展示最新的5G、AI和云计算技术成果。",
      image: "/images/customer-cases/case-01.png",
      participants: "3,500+",
      duration: "3天"
    },
    {
      id: 2,
      title: "年度股东大会",
      company: "中国银行股份有限公司",
      description: "线上线下混合模式的年度股东大会，确保全球股东能够实时参与投票表决和互动问答环节。",
      image: "/images/customer-cases/case-02.png",
      participants: "1,200+",
      duration: "1天"
    },
    {
      id: 3,
      title: "教育创新研讨会",
      company: "北京师范大学",
      description: "聚焦未来教育发展趋势的学术研讨会，采用智能会议系统实现多校区同步直播和互动交流。",
      image: "/images/customer-cases/case-03.png",
      participants: "800+",
      duration: "2天"
    },
    {
      id: 4,
      title: "医疗健康论坛",
      company: "中国医学科学院",
      description: "国际医疗健康创新论坛，邀请全球顶尖医学专家分享最新研究成果和临床实践经验。",
      image: "/images/customer-cases/case-01.png",
      participants: "2,000+",
      duration: "2天"
    },
    {
      id: 5,
      title: "智慧城市建设大会",
      company: "深圳市政府",
      description: "展示智慧城市建设最新成果，推动数字化转型和可持续发展的高端政府会议。",
      image: "/images/customer-cases/case-02.png",
      participants: "1,500+",
      duration: "1天"
    },
    {
      id: 6,
      title: "新能源汽车展览会",
      company: "比亚迪股份有限公司",
      description: "新能源汽车技术创新展览会，展示电动汽车、自动驾驶和绿色出行解决方案。",
      image: "/images/customer-cases/case-03.png",
      participants: "4,200+",
      duration: "4天"
    }
  ];

  // Auto-scroll timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % customerExamples.length);
    }, 1000000); // Changed to 10 seconds

    return () => clearInterval(timer);
  }, [customerExamples.length]);

  const handlePrevious = () => {
    setCurrentIndex(prev => 
      prev === 0 ? customerExamples.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % customerExamples.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  // Calculate transform for smooth scrolling
  const getTransform = () => {
    const cardWidth = 400; // Match the CSS flex-basis
    const gap = 32; // 2rem gap
    const offset = currentIndex * (cardWidth + gap);
    return `translateX(-${offset}px)`;
  };

  return (
    <div className={styles.fourth}>
      {/* Services Section */}
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>我们的服务</h2>
        <p className={styles.sectionDescription}>
          我们是一支为您提供专业化服务。我们对同行业的竞争对手和对产品有全面的定位，对品牌的包装和设计紧密链接在一起，
          保证每一个作品都是经过深思熟虑之后的创意，质量第一，用精美而富有情感化的设计打动用户。
        </p>
      </div>
      
      <img
        src="/images/customer-cases/display-screen.png"
        alt="我们的服务"
        className={styles.contentImage}
      />

      {/* Customer Examples Section */}
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>客户案例</h2>
        <p className={styles.sectionDescription}>
          我们已成功为众多知名企业和机构提供专业的会议管理服务，
          从大型国际会议到精品商务活动，每一次合作都体现了我们的专业实力和服务品质。
        </p>
      </div>

      <div className={styles.examplesWrapper}>
        <button 
          className={styles.navButton}
          onClick={handlePrevious}
          aria-label="Previous examples"
        >
          ‹
        </button>

        <div className={styles.examplesContainer}>
          <div 
            className={styles.examplesTrack}
            style={{ transform: getTransform() }}
          >
            {customerExamples.map((example) => (
              <div key={example.id} className={styles.exampleCard}>
                <div className={styles.exampleImageContainer}>
                  <img src={example.image} alt={example.title} className={styles.exampleImage} />
                  <div className={styles.exampleOverlay}>
                    <div className={styles.exampleStats}>
                      <span className={styles.statItem}>
                        <strong>{example.participants}</strong> 参会人员
                      </span>
                      <span className={styles.statItem}>
                        <strong>{example.duration}</strong> 会议时长
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles.exampleContent}>
                  <h3 className={styles.exampleTitle}>{example.title}</h3>
                  <h4 className={styles.exampleCompany}>{example.company}</h4>
                  <p className={styles.exampleDescription}>{example.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button 
          className={styles.navButton}
          onClick={handleNext}
          aria-label="Next examples"
        >
          ›
        </button>
      </div>

      <div className={styles.navigationDots}>
        {customerExamples.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${currentIndex === index ? styles.activeDot : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
}