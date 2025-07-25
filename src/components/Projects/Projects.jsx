import { useState, useEffect } from 'react';
import styles from './Projects.module.css';
import sharedStyles from '../../styles/shared.module.css';
import meetingProjectsData from '../../data/meetingProjects.json';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(meetingProjectsData.meetingProjects[0]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...new Set(meetingProjectsData.meetingProjects.map(project => project.category))];
  
  const filteredProjects = selectedCategory === 'all' 
    ? meetingProjectsData.meetingProjects 
    : meetingProjectsData.meetingProjects.filter(project => project.category === selectedCategory);

  const handleThumbnailClick = (project) => {
    setSelectedProject(project);
    // Update the URL hash to reflect the selected project
    window.history.replaceState(null, null, `#${project.id}`);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    const categoryProjects = category === 'all' 
      ? meetingProjectsData.meetingProjects 
      : meetingProjectsData.meetingProjects.filter(project => project.category === category);
    
    // Ensure we have projects to select from
    if (categoryProjects.length > 0) {
      setSelectedProject(categoryProjects[0]);
    }
  };

  // Handle navigation from home page via URL hash
  useEffect(() => {
    //scroll to top
    window.scrollTo(0, 0);
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        const project = meetingProjectsData.meetingProjects.find(p => p.id === hash);
        if (project) {
          setSelectedProject(project);
          // Update category filter to show the project's category or 'all'
          const projectCategory = project.category;
          setSelectedCategory('all');
        }
      }
    };

    // Check for hash on component mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []); // Remove selectedCategory from dependencies to prevent infinite loop

  return (
    <div className={styles.projectsPage}>
      <h1 className={styles.title}>项目案例</h1>
      
      {/* Category Filter */}
      <div className={styles.categoryFilter}>
        {categories.map(category => (
          <button
            key={category}
            className={`${styles.categoryButton} ${selectedCategory === category ? styles.active : ''}`}
            onClick={() => handleCategoryChange(category)}
          >
            {category === 'all' ? '全部' : category}
          </button>
        ))}
      </div>

      {/* Main Content Layout */}
      <div className={styles.mainContentLayout}>
        {/* Main Image Display */}
        {selectedProject && (
          <div 
            id={selectedProject.id}
            className={`${styles.mainImageContainer} ${sharedStyles.glassCardPremium}`}
          >
            <img 
              src={selectedProject.mainImage} 
              alt={selectedProject.title}
              className={styles.mainImage}
            />
            <div className={styles.projectInfo}>
              <div className={styles.projectHeader}>
                <h3 className={styles.projectTitle}>{selectedProject.title}</h3>
                <div className={styles.projectMeta}>
                  {selectedProject.location && (
                    <span className={styles.projectLocation}>📍 {selectedProject.location}</span>
                  )}
                  {selectedProject.year && (
                    <span className={styles.projectYear}>📅 {selectedProject.year}</span>
                  )}
                </div>
              </div>
              
              {selectedProject.description && (
                <p className={styles.projectDescription}>{selectedProject.description}</p>
              )}
              
              {selectedProject.features && selectedProject.features.length > 0 && (
                <div className={styles.projectFeatures}>
                  <h4 className={styles.featuresTitle}>主要功能：</h4>
                  <ul className={styles.featuresList}>
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className={styles.featureItem}>
                         {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <span className={styles.projectCategory}>{selectedProject.category}</span>
            </div>
          </div>
        )}

        {/* Side-scrolling Thumbnail Gallery */}
        <div className={`${styles.thumbnailGallery}`}>
          <h3 className={styles.galleryTitle}>项目列表</h3>
          <div className={styles.thumbnailContainer}>
            {filteredProjects.map(project => (
              <div
                key={project.id}
                className={`${styles.thumbnailItem} ${selectedProject?.id === project.id ? styles.selected : ''}`}
                onClick={() => handleThumbnailClick(project)}
              >
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className={styles.thumbnail}
                />
                <div className={styles.thumbnailOverlay}>
                  <span className={styles.thumbnailTitle}>{project.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}