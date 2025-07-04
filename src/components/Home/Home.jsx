import { useState, useEffect } from 'react';
import styles1 from './Home1.module.css';
import styles2 from './Home2.module.css';
import styles3 from './Home3.module.css';


export default function Home() {
  const [visibleCards, setVisibleCards] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleCards(prev => (prev < 3 ? prev + 1 : prev));
    }, 300);

    return () => clearInterval(timer);
  }, []);

  const contentImage = "/images/电脑显示.png"

  return (
    <>
      <div className={styles1.homePage}>
        <h1 className={styles1.title}>会智智能会议管理系统云平台</h1>
        <h2 className={styles1.subtitle}>Conference Intelligent Management System</h2>

        <div className={styles1.cardsContainer}>
          {/* Card 1 */}
          <div className={`${styles1.card} ${visibleCards >= 1 ? styles1.visible : ''}`}>
            <h2 className={styles1.cardTitle}>为什么选择会智</h2>
            <p className={styles1.cardContent}>
              会智智能会议管理系统云平台采用云计算技术、物联网技术、计算机应用技术、
              网络通讯技术、无线通信技术、移动互联网技术等现代信息技术开发建设而成，
              是一套功能强大、适应广泛、配置灵活、技术前瞻的智能会议管理系统。
            </p>
          </div>

          {/* Card 2 */}
          <div className={`${styles1.card} ${visibleCards >= 2 ? styles1.visible : ''}`}>
            <h2 className={styles1.cardTitle}>我们的目标</h2>
            <p className={styles1.cardContent}>
              针对各种大小会议的特点、环节、流程，构建科学的、高效的、严谨的、
              协同的智能会议全流程、全方位管理系统，旨在提高会议效率，
              降低任务成本，保障会议安全、顺利召开并直至顺利结束。
            </p>
          </div>

          {/* Card 3 */}
          <div className={`${styles1.card} ${visibleCards >= 3 ? styles1.visible : ''}`}>
            <h2 className={styles1.cardTitle}>我们的优势</h2>
            <p className={styles1.cardContent}>
              采用云端服务与现场服务相结合的体系架构，采用B/S与C/S混合模式开发，
              既满足了会议信息数据管理的需求，又为会议所需之必要硬件智能设备、
              设施提供了安全稳定运行环境。
            </p>
          </div>
        </div>
      </div>

      <div className={styles2.second}>
        <div className={styles2.sectionHeader}>
          <h2 className={styles2.sectionTitle}>会智智能会议管理系统云平台</h2>
          <p className={styles2.sectionDescription}>
            运用云计算技术、物联网技术、计算机应用技术、网络通讯技术、无线通信技术、移动互联网技术技术，
            聚合会议全流程中涉及到的所有环节，实现一站式全流程数字化运营，并将其组件化、流程化。
          </p>
        </div>

        <div className={styles2.featuresContainer}>
          <div className={styles2.featureItem}>
            <div className={styles2.featureImageContainer}>
              <img src="/images/1.png" alt="全面云端" className={styles2.featureImage} />
            </div>
            <h3 className={styles2.featureTitle}>全面云端</h3>
            <p className={styles2.featureDescription}>满足客户开箱即用，快速部署，随时扩容的云架构设计</p>
          </div>

          <div className={styles2.featureItem}>
            <div className={styles2.featureImageContainer}>
              <img src="/images/2.png" alt="全面平台" className={styles2.featureImage} />
            </div>
            <h3 className={styles2.featureTitle}>全面平台</h3>
            <p className={styles2.featureDescription}>前台轻量化、后台全面引擎化、灵活适用组织需求变化</p>
          </div>

          <div className={styles2.featureItem}>
            <div className={styles2.featureImageContainer}>
              <img src="/images/3.png" alt="全面移动" className={styles2.featureImage} />
            </div>
            <h3 className={styles2.featureTitle}>全面移动</h3>
            <p className={styles2.featureDescription}>集成微信和手机APP、web等方式让会议无处不在、随时随地</p>
          </div>

          <div className={styles2.featureItem}>
            <div className={styles2.featureImageContainer}>
              <img src="/images/4.png" alt="全面联通" className={styles2.featureImage} />
            </div>
            <h3 className={styles2.featureTitle}>全面联通</h3>
            <p className={styles2.featureDescription}>核心数据跨平台实时加密传输，确保会议信息全面互联互通</p>
          </div>
        </div>

        <div className={styles2.snakeCards}>
          <div className={styles2.snakePath}></div>

          <div className={styles2.snakeCard}>
            <h3>Card 1 Title</h3>
            <p>Card content will go here</p>
          </div>

          <div className={styles2.snakeCard}>
            <h3>Card 2 Title</h3>
            <p>Card content will go here</p>
          </div>

          <div className={styles2.snakeCard}>
            <h3>Card 3 Title</h3>
            <p>Card content will go here</p>
          </div>

          <div className={styles2.snakeCard}>
            <h3>Card 4 Title</h3>
            <p>Card content will go here</p>
          </div>
        </div>
        
      </div>

      <div className={styles3.third}>
        <div className={styles3.sectionHeader}>
          <h2 className={styles3.sectionTitle}>我们的服务</h2>
          <p className={styles3.sectionDescription}>
            我们是一支为您提供专业化服务。我们对同行业的竞争对手和对产品有全面的定位，对品牌的包装和设计紧密链接在一起，
            保证每一个作品都是经过深思熟虑之后的创意，质量第一，用精美而富有情感化的设计打动用户。
          </p>
        </div>
        <img
          src={contentImage}
          alt="我们的服务"
          className={styles3.contentImage}
        />
      </div>
    </>
  );
}