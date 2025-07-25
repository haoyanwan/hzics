import styles from './Projects.module.css';

export default function Projects() {
  return (
    <div className={styles.projectsPage}>
      <h1 className={styles.title}>项目案例</h1>
      <p className={styles.content}>我们的项目案例正在整理中，敬请期待。</p>
    </div>
  );
}