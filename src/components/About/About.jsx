import { useState, useEffect } from 'react';
import styles from './About.module.css';
import sharedStyles from '../../styles/shared.module.css';
import timelineData from '../../data/timelineData.json';
import certificatesData from '../../data/certificates.json';
import customerLocations from '../../data/customerLocations.json';

export default function About() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className={styles.aboutPage}>
      {/* Full Height Banner Background */}
      <div className={styles.bannerSection}>
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=800&fit=crop&crop=center"
          alt="About Banner"
          className={styles.bannerImage}
        />
        <div className={styles.bannerOverlay}>
          <h1 className={styles.bannerTitle}>关于我们</h1>
        </div>
      </div>

      {/* Overlapping Card */}
      <div className={styles.overlappingCard}>
        <section className={`${styles.introSection} ${sharedStyles.glassCardPremium}`}>
          <div className={styles.textHalf}>
            <div className={styles.introContent}>
              <h2 className={styles.cardTitle}>广州会智智能科技</h2>
              <p className={styles.introText}>
                广州会智智能科技有限公司 2003年底成立，并于2006年通过了ISO9001:2000质量体系认证及2009年成为广州市高新技术产业开发区天河科技园入驻企业。公司自成立以来，专注于智能化会议产业，专业化智能化会议管理系统、硬件及相关产品的研制、开发和应用等。

                公司拥有自主研发的“会智”品牌智能会议集成管理系统平台，包含：智能会议管理系统、移动终端会议服务系统、会议智能排位系统、会议证件制作管理系统、会议签到系统、会议签到系统、会议认证系统、无线会议系统、会议大数据系统、会议讨论/表决系统、无线表决系统、会议投票系统、同声传译、会议音响系统、大屏幕显示系统、会议中控系统等，并取得相应的各类软件著作权证书。

                通过十几年的积累与沉淀，公司拥有一支专业化的高素质会议务系统及相关产品的研发、生产、营销、施工、售后、售后管理服务团队。
                多年来，公司坚持“以人为核心，以品牌为资本，以营销为动力，以优质服务为宗旨”的经营方针，立足广东，服务全国，足迹遍布中国20多个省市、自治区，客户涵盖党政、政府、人大、政协、金融、交通、能源、通信、房地产等行政、企、事业单位及各行业机构，建立了良好的市场机制的营销服务网络体系，为公司成长迈发展打下了坚实的基础。

                公司将本着“精确缜健、科学发展”的经营方针，以一流的企业、一流的管理、一流的服务、一流的质量为理念，抓住机遇，迎接挑战，为国家会议系统建设信息化和智能化的发展做出新的贡献。
              </p>

            </div>
          </div>
          <div className={styles.imageHalf}>
            <img
              src="/images/pages/about-us.png"
              alt="About us"
              className={styles.aboutImage}
            />
          </div>
        </section>
      </div>

      {/* Content Background */}
      <div className={styles.contentBackground}>
        <div className={styles.container}>

          {/* Roadmap Timeline Section */}
          <section className={styles.roadmapSection}>
            <h2 className={styles.sectionTitle}>发展历程</h2>
            <div className={styles.timeline}>
              {timelineData.timelineEvents.map((event, index) => (
                <div key={event.id} className={styles.timelineItem}>
                  {index % 2 === 0 ? (
                    <>
                      <div className={`${styles.timelineContent} ${sharedStyles.glassCard}`}>
                        <h3>{event.title}</h3>
                        <p>{event.description}</p>
                      </div>
                      <div className={styles.timelineYear}>{event.year}</div>
                      <div className={styles.timelineEmpty}></div>
                    </>
                  ) : (
                    <>
                      <div className={styles.timelineEmpty}></div>
                      <div className={styles.timelineYear}>{event.year}</div>
                      <div className={`${styles.timelineContent} ${sharedStyles.glassCard}`}>
                        <h3>{event.title}</h3>
                        <p>{event.description}</p>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Customer Locations Section */}
          <section className={styles.locationsSection}>
            <h2 className={styles.sectionTitle}>服务分布</h2>
            <div className={`${styles.globeContainer} ${sharedStyles.glassCard}`}>
              <div className={styles.globeContent}>
                <div className={styles.locationStats}>
                  <div className={styles.statItem}>
                    <div className={styles.statNumber}>{customerLocations.customerLocations.length}</div>
                    <div className={styles.statLabel}>覆盖城市</div>
                  </div>
                  <div className={styles.statItem}>
                    <div className={styles.statNumber}>1500+</div>
                    <div className={styles.statLabel}>企业客户</div>
                  </div>
                  <div className={styles.statItem}>
                    <div className={styles.statNumber}>{Object.keys(customerLocations.regionStats).length}</div>
                    <div className={styles.statLabel}>服务区域</div>
                  </div>
                </div>
                <div className={styles.locationMap}>
                  <h3>全国服务分布图</h3>
                  <div className={styles.interactiveMap}>
                    <div className={styles.mapContainer}>
                      <img 
                        src="/images/icons/location-map.png" 
                        alt="中国地图" 
                        className={styles.mapBackground}
                      />
                      {customerLocations.customerLocations.map((location) => (
                        <div
                          key={location.id}
                          className={`${styles.mapPin} ${selectedLocation?.id === location.id ? styles.mapPinActive : ''}`}
                          style={{
                            left: `${((location.lng - 73.5) / (135 - 73.5)) * 100}%`,
                            top: `${(1 - (location.lat - 18) / (53.5 - 18)) * 100}%`
                          }}
                          onMouseEnter={() => setSelectedLocation(location)}
                          onMouseLeave={() => setSelectedLocation(null)}
                          onClick={() => setSelectedLocation(selectedLocation?.id === location.id ? null : location)}
                        >
                          <div className={styles.pinIcon}></div>
                          {selectedLocation?.id === location.id && (
                            <div className={styles.locationTooltip}>
                              <div className={styles.tooltipContent}>
                                <h4>{location.city}</h4>
                                <p>{location.province}</p>
                                <span className={styles.regionTag}>{location.region}</span>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
              
                </div>
              </div>
            </div>
          </section>

          {/* Certificates Section */}
          <section className={styles.certificatesSection}>
            <h2 className={styles.sectionTitle}>资质荣誉</h2>
            
            {/* Horizontal Certificate - High-tech Enterprise */}
            <div className={styles.horizontalCertificate}>
              <img 
                src="/images/certificates/高新科技企业证书.jpg" 
                alt="高新技术企业证书"
                className={styles.horizontalCertificateImage}
              />
            </div>

            {/* Vertical Certificates Grid */}
            <div className={styles.certificatesGrid}>
              {certificatesData.certificates
                .filter(cert => cert.id !== 2) // Exclude the horizontal certificate
                .map((certificate) => (
                <div key={certificate.id} className={styles.certificateItem}>
                  <img 
                    src={certificate.image} 
                    alt={certificate.name}
                    className={styles.certificateImage}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Mission Section */}
          <section className={`${styles.missionSection} ${sharedStyles.glassCardBlue}`}>
            <div className={styles.missionContent}>
              <h2 className={styles.missionTitle}>我们的目标</h2>
              <div className={styles.missionDescription}>
                <p className={styles.missionText}>
                  针对各种大小会议的特点、环节、流程，构建科学的、高效的、严谨的、协同的智能会议全流程、全方位管理系统，旨在提高会议效率，降低任务成本，保障会议安全、顺利召开并直至顺利结束。
                </p>
                <p className={styles.missionFooter}>
                  "一流的管理、一流的产品、一流的服务、一流的质量"——我们致力于会议信息化领域持续创新。
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}