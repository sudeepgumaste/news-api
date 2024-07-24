import React from 'react'

import styles from './styles.module.css'

const SkeletonLoaderArticleCard:React.FC = () => {
  return (
    <div className={styles.skeletonLoaderArticleCard}>
      <div className={styles.skeletonLoaderArticleCardImage}></div>
      <div className={styles.skeletonLoaderArticleCardText}>
        <div className={styles.skeletonLoaderArticleCardTitle}></div>
        <div className={styles.skeletonLoaderArticleCardTitle}></div>
        <div className={styles.skeletonLoaderArticleCardDescription}></div>
        <div className={styles.skeletonLoaderArticleCardDescription}></div>
      </div>
    </div>
  )
}

export default SkeletonLoaderArticleCard