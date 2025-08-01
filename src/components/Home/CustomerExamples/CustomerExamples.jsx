import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CustomerExamples.module.css';
import meetingProjectsData from '../../../data/meetingProjects.json';

export default function CustomerExamples() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  // Check if screen is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Use actual project data from the projects page (first 6 projects)
  const customerExamples = meetingProjectsData.meetingProjects.slice(0, 6).map((project, index) => ({
    id: project.id,
    title: project.title,
    company: project.location || '项目案例',
    image: project.thumbnail,
    category: project.category,
    year: project.year || '2023'
  }));

  const handleProjectClick = (projectId) => {
    // Navigate to projects page with hash to select specific project
    navigate(`/projects#${projectId}`);
  };

  // Auto-scroll timer (10 seconds for mobile, longer for desktop)
  useEffect(() => {
    const interval = isMobile ? 10000 : 5000; // 10 seconds for mobile, 5 seconds for desktop
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % customerExamples.length);
    }, interval);

    return () => clearInterval(timer);
  }, [customerExamples.length, isMobile]);

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

      {isMobile ? (
        // Mobile: Single centered card
        <div className={styles.mobileCardContainer}>
          <div 
            className={`${styles.exampleCard} ${styles.mobileCard}`}
            onClick={() => handleProjectClick(customerExamples[currentIndex].id)}
          >
            <div className={styles.exampleImageContainer}>
              <img 
                src={customerExamples[currentIndex].image} 
                alt={customerExamples[currentIndex].title} 
                className={styles.exampleImage} 
              />
              <div className={styles.exampleOverlay}>
                <div className={styles.exampleStats}>
                  <span className={styles.statItem}>
                    <strong>{customerExamples[currentIndex].category}</strong>
                  </span>
                  <span className={styles.statItem}>
                    <strong>{customerExamples[currentIndex].year}</strong> 年
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.exampleContent}>
              <h3 className={styles.exampleTitle}>{customerExamples[currentIndex].title}</h3>
              <h4 className={styles.exampleCompany}>{customerExamples[currentIndex].company}</h4>
              <div className={styles.viewMore}>
                <span className={styles.viewMoreText}>点击查看详情</span>
                <span className={styles.viewMoreArrow}>→</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Desktop: Carousel
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
                <div 
                  key={example.id} 
                  className={styles.exampleCard}
                  onClick={() => handleProjectClick(example.id)}
                >
                  <div className={styles.exampleImageContainer}>
                    <img src={example.image} alt={example.title} className={styles.exampleImage} />
                    <div className={styles.exampleOverlay}>
                      <div className={styles.exampleStats}>
                        <span className={styles.statItem}>
                          <strong>{example.category}</strong>
                        </span>
                        <span className={styles.statItem}>
                          <strong>{example.year}</strong> 年
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.exampleContent}>
                    <h3 className={styles.exampleTitle}>{example.title}</h3>
                    <h4 className={styles.exampleCompany}>{example.company}</h4>
                    <div className={styles.viewMore}>
                      <span className={styles.viewMoreText}>点击查看详情</span>
                      <span className={styles.viewMoreArrow}>→</span>
                    </div>
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
      )}

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