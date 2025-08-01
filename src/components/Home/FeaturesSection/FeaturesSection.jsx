import styles from './FeaturesSection.module.css';

export default function FeaturesSection() {
  const showcaseFeatures = ['会议网站', '微信公众号', '会议APP', '邀请函'];

  return (
    <div className={styles.second}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>会智智能会议管理系统云平台</h2>
        <p className={styles.sectionDescription}>
          运用云计算技术、物联网技术、计算机应用技术、网络通讯技术、无线通信技术、移动互联网技术技术，
          聚合会议全流程中涉及到的所有环节，实现一站式全流程数字化运营，并将其组件化、流程化。
        </p>
      </div>

      <div className={styles.featuresContainer}>
        <div className={styles.featureItem}>
          <div className={styles.featureImageContainer}>
            <img src="/images/features/cloud-feature.png" alt="全面云端" className={styles.featureImage} />
          </div>
          <h3 className={styles.featureTitle}>全面云端</h3>
          <p className={styles.featureDescription}>满足客户开箱即用，快速部署，随时扩容的云架构设计</p>
        </div>

        <div className={styles.featureItem}>
          <div className={styles.featureImageContainer}>
            <img src="/images/features/platform-feature.png" alt="全面平台" className={styles.featureImage} />
          </div>
          <h3 className={styles.featureTitle}>全面平台</h3>
          <p className={styles.featureDescription}>前台轻量化、后台全面引擎化、灵活适用组织需求变化</p>
        </div>

        <div className={styles.featureItem}>
          <div className={styles.featureImageContainer}>
            <img src="/images/features/mobile-feature.png" alt="全面移动" className={styles.featureImage} />
          </div>
          <h3 className={styles.featureTitle}>全面移动</h3>
          <p className={styles.featureDescription}>集成微信和手机APP、web等方式让会议无处不在、随时随地</p>
        </div>

        <div className={styles.featureItem}>
          <div className={styles.featureImageContainer}>
            <img src="/images/features/connectivity-feature.png" alt="全面联通" className={styles.featureImage} />
          </div>
          <h3 className={styles.featureTitle}>全面联通</h3>
          <p className={styles.featureDescription}>核心数据跨平台实时加密传输，确保会议信息全面互联互通</p>
        </div>
      </div>

      <div className={styles.showcaseSection}>
        <h3 className={styles.showcaseTitle}>系统架构</h3>
        <p className={styles.showcaseDescription}>
          我们的系统架构采用模块化设计，支持多种展示载体，满足不同会议场景需求，全面提升会议体验
        </p>
        <div className={styles.showcaseFeatures}>
          {showcaseFeatures.map((feature, index) => (
            <div key={index} className={styles.showcaseItem}>
              {feature}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.systemLayout}>
        {/* First Section - 50% */}
        <div className={styles.systemSection} style={{ flex: '50%' }}>
          <div className={styles.sectionBanner}>
            <h4 className={styles.bannerTitle}>会议前准备</h4>
          </div>
          <div className={styles.columnsContainer}>
            <div className={styles.column}>
              <div className={styles.columnIcon}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="https://www.w3.org/2000/svg" className={styles.iconImage}>
                  <rect x="8" y="8" width="32" height="32" rx="4" fill="#4F46E5" stroke="#312E81" strokeWidth="2" />
                  <path d="M16 20h16M16 24h16M16 28h12" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="12" cy="20" r="1" fill="white" />
                  <circle cx="12" cy="24" r="1" fill="white" />
                  <circle cx="12" cy="28" r="1" fill="white" />
                </svg>
              </div>
              <h5 className={styles.columnTitle}>会议展示</h5>
              <ul className={styles.bulletList}>
                <li>展示载体</li>
                <li>会议网站</li>
                <li>微信公众号</li>
                <li>会议APP</li>
                <li>邀请函</li>
                <li>制作流程</li>
                <li>模式选择</li>
                <li>样式编辑</li>
                <li>颜色编辑</li>
                <li>内容编辑</li>
                <li>模块选择</li>
                <li>报名表与数据统计</li>
              </ul>
            </div>
            <div className={styles.column}>
              <div className={styles.columnIcon}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="https://www.w3.org/2000/svg" className={styles.iconImage}>
                  <circle cx="18" cy="16" r="6" fill="#10B981" stroke="#065F46" strokeWidth="2" />
                  <circle cx="30" cy="16" r="6" fill="#10B981" stroke="#065F46" strokeWidth="2" />
                  <path d="M6 38c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#065F46" strokeWidth="2" strokeLinecap="round" />
                  <path d="M18 38c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#065F46" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h5 className={styles.columnTitle}>注册报名</h5>
              <ul className={styles.bulletList}>
                <li>报名流程设置</li>
                <li>报名表单设置</li>
                <li>证卡种类设置</li>
                <li>电子票设置</li>
                <li>支付设置</li>
                <li>会议流程设置</li>
                <li>微信通知设置</li>
                <li>通知短信设置</li>
                <li>通知邮件设置</li>
                <li>会议资料设置</li>
                <li>个人中心设置</li>
              </ul>
            </div>
            <div className={styles.column}>
              <div className={styles.columnIcon}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="https://www.w3.org/2000/svg" className={styles.iconImage}>
                  <rect x="4" y="20" width="40" height="20" rx="2" fill="#F59E0B" stroke="#92400E" strokeWidth="2" />
                  <rect x="8" y="12" width="32" height="8" rx="2" fill="#FED7AA" stroke="#92400E" strokeWidth="2" />
                  <rect x="12" y="24" width="6" height="12" fill="#92400E" />
                  <rect x="18" y="24" width="6" height="12" fill="#92400E" />
                  <rect x="24" y="24" width="6" height="12" fill="#92400E" />
                  <rect x="30" y="24" width="6" height="12" fill="#92400E" />
                  <circle cx="24" cy="8" r="4" fill="#FED7AA" stroke="#92400E" strokeWidth="2" />
                </svg>
              </div>
              <h5 className={styles.columnTitle}>会议邀请</h5>
              <ul className={styles.bulletList}>
                <li>邀请渠道设置</li>
                <li>渠道反馈监测</li>
                <li>微信邀请</li>
                <li>短信邀请</li>
                <li>邮件邀请</li>
                <li>海报设置与分发</li>
                <li>邀请函制作与分发</li>
              </ul>
            </div>
            <div className={styles.column}>
              <div className={styles.columnIcon}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="https://www.w3.org/2000/svg" className={styles.iconImage}>
                  <path d="M12 6h18l6 6v30a2 2 0 01-2 2H12a2 2 0 01-2-2V8a2 2 0 012-2z" fill="#8B5CF6" stroke="#5B21B6" strokeWidth="2" />
                  <path d="M30 6v6h6" stroke="#5B21B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 20h16M16 24h16M16 28h12" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h5 className={styles.columnTitle}>数据管理</h5>
              <ul className={styles.bulletList}>
                <li>参会人管理</li>
                <li>会议资料管理</li>
                <li>酒店管理</li>
                <li>车辆管理</li>
                <li>座位管理</li>
                <li>用餐管理</li>
                <li>会务组管理</li>
                <li>会务人员管理</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Second Section - 37.5% */}
        <div className={styles.systemSection} style={{ flex: '37.5%' }}>
          <div className={styles.sectionBanner}>
            <h4 className={styles.bannerTitle}>会议进行中</h4>
          </div>
          <div className={styles.columnsContainer}>
            <div className={styles.column}>
              <div className={styles.columnIcon}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="https://www.w3.org/2000/svg" className={styles.iconImage}>
                  <rect x="8" y="12" width="32" height="24" rx="4" fill="#EF4444" stroke="#B91C1C" strokeWidth="2" />
                  <circle cx="24" cy="24" r="6" fill="white" />
                  <circle cx="24" cy="24" r="3" fill="#EF4444" />
                  <path d="M6 18l4-4M38 18l4-4M6 30l4 4M38 30l4 4" stroke="#B91C1C" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h5 className={styles.columnTitle}>现场管理</h5>
              <ul className={styles.bulletList}>
                <li>电子签到</li>
                <li>ipad签到/手机签到</li>
                <li>微信签到</li>
                <li>RFID签到</li>
                <li>闸机签到</li>
                <li>手环签到</li>
                <li>地毯签到</li>
                <li>身份证签到</li>
                <li>自动签到</li>
                <li>现场制证</li>
                <li>离线签到</li>
                <li>局域网签到</li>
              </ul>
            </div>
            <div className={styles.column}>
              <div className={styles.columnIcon}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="https://www.w3.org/2000/svg" className={styles.iconImage}>
                  <rect x="6" y="8" width="36" height="24" rx="4" fill="#06B6D4" stroke="#0E7490" strokeWidth="2" />
                  <rect x="10" y="36" width="28" height="4" rx="2" fill="#0E7490" />
                  <path d="M14 16l8 6-8 6z" fill="white" />
                  <rect x="24" y="18" width="12" height="2" fill="white" />
                  <rect x="24" y="22" width="8" height="2" fill="white" />
                </svg>
              </div>
              <h5 className={styles.columnTitle}>会场互动</h5>
              <ul className={styles.bulletList}>
                <li>无线投票</li>
                <li>评审表决</li>
                <li>电子票箱</li>
                <li>论坛交流</li>
                <li>现场抽奖</li>
                <li>摇一摇抽奖</li>
                <li>红包</li>
              </ul>
            </div>
            <div className={styles.column}>
              <div className={styles.columnIcon}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="https://www.w3.org/2000/svg" className={styles.iconImage}>
                  <circle cx="24" cy="24" r="16" fill="#7C3AED" stroke="#5B21B6" strokeWidth="2" />
                  <path d="M16 24l4 4 8-8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M32 16l8-8M40 16l-8-8M32 32l8 8M40 32l-8 8" stroke="#5B21B6" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h5 className={styles.columnTitle}>会务协助</h5>
              <ul className={styles.bulletList}>
                <li>请假管理</li>
                <li>设备管理</li>
                <li>投屏显示</li>
                <li>会务通知</li>
                <li>实时监控</li>
                <li>到会情况</li>
                <li>资讯推送</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Third Section - 12.5% */}
        <div className={styles.systemSection} style={{ flex: '12.5%' }}>
          <div className={styles.sectionBanner}>
            <h4 className={styles.bannerTitle}>会议结束</h4>
          </div>
          <div className={styles.columnsContainer}>
            <div className={styles.column}>
              <div className={styles.columnIcon}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="https://www.w3.org/2000/svg" className={styles.iconImage}>
                  <rect x="8" y="8" width="24" height="32" rx="4" fill="#059669" stroke="#047857" strokeWidth="2" />
                  <path d="M16 18h8M16 22h8M16 26h6" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <path d="M36 16l4 4-4 4" stroke="#047857" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="32" y="28" width="12" height="8" rx="2" fill="#10B981" stroke="#047857" strokeWidth="2" />
                  <path d="M36 32l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h5 className={styles.columnTitle}>数据报表</h5>
              <ul className={styles.bulletList}>
                <li>参会人统计</li>
                <li>酒店数据统计</li>
                <li>短信发送统计</li>
                <li>签到分析</li>
                <li>分会场分析</li>
                <li>参会者分析</li>
                <li>论坛交流分析</li>
                <li>自定义分析</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}