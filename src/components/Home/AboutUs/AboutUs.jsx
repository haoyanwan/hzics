import styles from './AboutUs.module.css';

export default function AboutUs() {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>关于我们</h2>
          <p className={styles.sectionSubtitle}>
            专注智能化会议产业，提供专业会议管理系统与软硬件产品研发服务
          </p>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.contentCard}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>公司概况</h3>
            <p className={styles.cardDescription}>
              广州会智智能科技有限公司成立于2003年，2009年成为广州市高新技术产业开发区科技园入驻企业。
              专注于智能化会议产业，专业化智能会议管理系统软件、硬件及相关产品的研发、开发和应用。
              旗下拥有"会智通"品牌系列产品，涵盖会议管控系统、签到系统、无纸化系统、数据系统等。
            </p>
          </div>

          <div className={styles.contentCard}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                <path d="M2 12h20"/>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>专业积淀</h3>
            <p className={styles.cardDescription}>
              公司通过十几年的积累与沉淀，组建了专业化的高素质研发、生产、销售、施工、售后服务团队。
              在智能会议系统、音视频集成、无线传输、投票系统等方面具备丰富经验，并取得相关软件著作权证书。
            </p>
          </div>

          <div className={styles.contentCard}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>经营理念</h3>
            <p className={styles.cardDescription}>
              公司坚持"以人为核心、以品牌为抓手、以服务为宗旨"，客户遍及全国20多个省市，服务政府、人大、政协、金融、通信、能源、房地等行业单位。
              公司将本着"精细稳健、科学发展"的理念，助力国家会议系统信息化和智能化的持续发展。
            </p>
          </div>
        </div>

        <div className={styles.statsSection}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>20+</div>
            <div className={styles.statLabel}>覆盖省份</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>2003</div>
            <div className={styles.statLabel}>成立年份</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>30+</div>
            <div className={styles.statLabel}>研发产品</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>100%</div>
            <div className={styles.statLabel}>自主产权</div>
          </div>
        </div>

        <div className={styles.footer}>
          <p className={styles.footerText}>
            "一流的管理、一流的产品、一流的服务、一流的质量"——我们致力于会议信息化领域持续创新。
          </p>
        </div>

        {/* News Section */}
        <div className={styles.newsSection}>
          <h2 className={styles.newsTitle}>公司动态</h2>
          <div className={styles.newsGrid}>
            <div className={styles.newsCard}>
              <div className={styles.newsImageContainer}>
                <img 
                  src="https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2226&q=80" 
                  alt="会议室科技"
                  className={styles.newsImage}
                />
                <div className={styles.newsImageOverlay}></div>
              </div>
              <div className={styles.newsContent}>
                <div className={styles.newsDate}>2024年7月</div>
                <h3 className={styles.newsCardTitle}>会智通新一代无纸化会议系统正式发布</h3>
                <p className={styles.newsSummary}>
                  经过两年精心研发，我们全新推出的无纸化会议系统集成了AI智能语音识别、实时翻译、云端同步等前沿技术，为政府机构和企业客户提供更加高效便捷的会议管理体验。
                </p>
                <a href="#" className={styles.newsReadMore}>查看详情</a>
              </div>
            </div>

            <div className={styles.newsCard}>
              <div className={styles.newsImageContainer}>
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="团队合作"
                  className={styles.newsImage}
                />
                <div className={styles.newsImageOverlay}></div>
              </div>
              <div className={styles.newsContent}>
                <div className={styles.newsDate}>2024年6月</div>
                <h3 className={styles.newsCardTitle}>获得国家高新技术企业认定证书</h3>
                <p className={styles.newsSummary}>
                  广州会智智能科技有限公司正式获得国家高新技术企业认定证书，这标志着公司在技术创新能力和研发实力方面得到了国家权威机构的认可，为公司未来发展奠定了坚实基础。
                </p>
                <a href="#" className={styles.newsReadMore}>查看详情</a>
              </div>
            </div>

            <div className={styles.newsCard}>
              <div className={styles.newsImageContainer}>
                <img 
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                  alt="展会现场"
                  className={styles.newsImage}
                />
                <div className={styles.newsImageOverlay}></div>
              </div>
              <div className={styles.newsContent}>
                <div className={styles.newsDate}>2024年5月</div>
                <h3 className={styles.newsCardTitle}>参加第十五届中国国际会议展览会</h3>
                <p className={styles.newsSummary}>
                  公司携最新研发的智能会议系统产品亮相第十五届中国国际会议展览会，吸引了众多政府机构和企业客户的关注。现场展示了我们在会议信息化领域的最新技术成果。
                </p>
                <a href="#" className={styles.newsReadMore}>查看详情</a>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}