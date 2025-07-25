import { useState, useEffect, useRef } from 'react';
import styles from './Contact.module.css';
import sharedStyles from '../../styles/shared.module.css';

export default function Contact() {
  const [isMapVisible, setIsMapVisible] = useState(false);
  const mapRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    // scroll to top 
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.9) {
          setIsMapVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.9 }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const isFormFilled = formData.name.trim() !== '' && 
                      formData.phone.trim() !== '' && 
                      formData.message.trim() !== '';
  return (
    <div className={styles.contactPage}>
      {/* Full Height Banner Background */}
      <div className={styles.bannerSection}>
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&h=800&fit=crop&crop=center"
          alt="Contact Banner"
          className={styles.bannerImage}
        />
        <div className={styles.bannerOverlay}>
          <h1 className={styles.bannerTitle}>联系我们</h1>
        </div>
      </div>

      {/* Overlapping Card */}
      <div className={styles.overlappingCard}>
        {/* Company Introduction */}
        <section className={`${styles.introSection} ${sharedStyles.glassCardPremium}`}>
          <div className={styles.textHalf}>
            <div className={styles.introContent}>
              <h2 className={styles.cardTitle}>联系我们</h2>
              <p className={styles.introText}>
                广州会智智能科技是一家专业生产会议系统设备、软件开发及代理其他国内外所知名音、视频产品、AV系统集成产品、计算机网络集成产品的专业公司。
              </p>
              <p className={styles.introText}>
                主要类目有：会议事务管理、会议签到系统、会议讨论/表决系统、无线表决系统、会议投票系统、同声传译、会议音响系统、大屏幕显示系统、会议中控系统。
              </p>
            </div>
          </div>
          <div className={styles.imageHalf}>
            <img 
              src="/images/icons/handshake.png" 
              alt="握手" 
              className={styles.handshakeImage}
            />
          </div>
        </section>
      </div>

      {/* Content Background with Different Color */}
      <div className={styles.contentBackground}>
        <div className={styles.container}>
          {/* Company Philosophy */}
          <section className={styles.philosophySection}>
            <div className={styles.philosophyContainer}>
              <div className={styles.philosophyTitleFloat}>
                <h2 className={styles.floatingTitle}>01 公司理念</h2>
              </div>
              <div className={`${styles.philosophyBox} ${sharedStyles.glassCardBlue}`}>
                <h3 className={styles.philosophyTitle}>我们愿景, 我们宗旨</h3>
                <p className={styles.philosophyText}>
                  以诚信经营的原则与各行业用户共同创造信息世界的美好明天。
                </p>
              </div>
            </div>
          </section>

          {/* Company Details */}
          <section className={styles.detailsSection}>
            <div className={styles.detailsContent}>
              <p className={styles.detailsText}>
                广州会智智能科技有限公司是一家专业生产会议系统设备、软件开发及代理其他国内外所知名音、视频产品、AV系统集成产品、计算机网络集成产品的专业公司。公司共有员工30余人，汇集广东省热爱系统的青年博士、硕士精英，拥有一批知识过硬和工程经验丰富的工程师和高级工程师。公司自2002年11月成立以来，我公司凭借自身强大的技术优势，一直致力于软件计算机系统、网络通讯系统和声、光、像系统三者之间应用与发展。并将一批品质卓越的音视频产品、网络控制推向全国性市场，赢得了国内外同行的赞誉和客户的高度信赖。经过不断的努力和创新，在政府机关、银行、宾馆、商务、学校等多种行业取得了骄人的业绩，形成了前期技术咨询、方案设计、设备安装、售后技术维护这一套完整的服务体系。
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className={`${styles.contactSection} ${sharedStyles.glassCard}`}>
            <h2 className={styles.sectionTitle}>联系方式</h2>
            <div className={styles.contactContent}>
              <div className={styles.contactGrid}>
                <div className={`${styles.contactItem} ${sharedStyles.glassCardBlue}`}>
                  <h3 className={styles.contactTitle}>公司地址</h3>
                  <p className={styles.contactText}>广东省广州市番禺区国泰路28号 2栋206</p>
                </div>
                <div className={`${styles.contactItem} ${sharedStyles.glassCardBlue}`}>
                  <h3 className={styles.contactTitle}>联系电话</h3>
            
                  <div className={styles.contactText}>Tel: 400-8525-5989</div>
                  <div className={styles.contactText}>Fax: 020-3479-8377</div>
                </div>
                <div className={`${styles.contactItem} ${sharedStyles.glassCardBlue}`}>
                  <h3 className={styles.contactTitle}>电子邮箱</h3>
                  <p className={styles.contactText}>Email: 425819655@qq.com</p>
                </div>
              </div>
              <div className={`${styles.mapContainer} ${sharedStyles.glassCard}`} ref={mapRef}>
                {isMapVisible ? (
                  <iframe
                    src="https://api.map.baidu.com/marker?location=23.014806,113.383717&title=同创誉城-2栋206&content=广州会智智能科技有限公司&output=html"
                    width="100%"
                    height="400"
                    frameBorder="0"
                    scrolling="no"
                    tabIndex="-1"
                    className={styles.baiduMap}
                    title="Baidu Map - Company Location"
                  />
                ) : (
                  <div className={styles.mapPlaceholder}>
                    <img 
                      src="/images/icons/map-location.png" 
                      alt="Company Location Map" 
                      className={styles.placeholderImage}
                    />
                    <div className={styles.loadingOverlay}>
                      <div className={styles.loadingText}>地图加载中...</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section className={`${styles.contactFormSection} ${sharedStyles.glassCard}`}>
            <h2 className={styles.sectionTitle}>留言联系</h2>
            <form className={styles.contactForm}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>姓名</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={styles.formInput} 
                    placeholder="请输入您的姓名" 
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>联系电话</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={styles.formInput} 
                    placeholder="请输入您的联系电话" 
                  />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>留言内容</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={styles.formTextarea} 
                  rows="5" 
                  placeholder="请输入您的留言内容..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className={`${styles.submitButton} ${isFormFilled ? styles.filled : ''}`}
              >
                发送留言
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}