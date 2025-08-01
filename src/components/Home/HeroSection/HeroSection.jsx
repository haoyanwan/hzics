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
       
      </div>
    </div>
  );
}