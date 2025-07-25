import { useState, useEffect } from 'react';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const [visibleCards, setVisibleCards] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleCards(prev => (prev < 3 ? prev + 1 : prev));
    }, 300);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={styles.homePage}>
      {/* Floating particles for ambient effect */}
      <div className={styles.particles}>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
      </div>

      <h1 className={styles.title}>会智智能会议管理系统云平台</h1>
      <h2 className={styles.subtitle}>Conference Intelligent Management System</h2>

      <div className={styles.cardsContainer}>
        {/* Card 1 */}
        <div className={`${styles.card} ${visibleCards >= 1 ? styles.visible : ''}`}>
          <h2 className={styles.cardTitle}>为什么选择会智</h2>
          <p className={styles.cardContent}>
            会智智能会议管理系统云平台采用云计算技术、物联网技术、计算机应用技术、
            网络通讯技术、无线通信技术、移动互联网技术等现代信息技术开发建设而成，
            是一套功能强大、适应广泛、配置灵活、技术前瞻的智能会议管理系统。
          </p>
        </div>

        {/* Card 2 */}
        <div className={`${styles.card} ${visibleCards >= 2 ? styles.visible : ''}`}>
          <h2 className={styles.cardTitle}>我们的目标</h2>
          <p className={styles.cardContent}>
            针对各种大小会议的特点、环节、流程，构建科学的、高效的、严谨的、
            协同的智能会议全流程、全方位管理系统，旨在提高会议效率，
            降低任务成本，保障会议安全、顺利召开并直至顺利结束。
          </p>
        </div>

        {/* Card 3 */}
        <div className={`${styles.card} ${visibleCards >= 3 ? styles.visible : ''}`}>
          <h2 className={styles.cardTitle}>我们的优势</h2>
          <p className={styles.cardContent}>
            采用云端服务与现场服务相结合的体系架构，采用B/S与C/S混合模式开发，
            既满足了会议信息数据管理的需求，又为会议所需之必要硬件智能设备、
            设施提供了安全稳定运行环境。
          </p>
        </div>
      </div>
    </div>
  );
}