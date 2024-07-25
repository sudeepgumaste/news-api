import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import CategoryCard from '../../atoms/category-card'
import categories from '../../../constants/categories'
import trackUserActivity from '../../../utils/track-user-activity'

import styles from './styles.module.css'

const HomePage:React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const navigate = useNavigate()

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!searchTerm) return
    trackUserActivity('search', { searchTerm })
    const searchParams = new URLSearchParams()
    searchParams.set('q', searchTerm)
    searchParams.set('page', '1')
    navigate(`/search?${searchParams.toString()}`)
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>What captivates your curiosity today?</h1>
      <h2 className={styles.subTitle}>Get the latest news from around the world</h2>

      <form className={styles.searchContainer} onClick={handleSearch}>
        <input type="text" placeholder="Search for a topic" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button type='submit'>Search</button>
      </form>

      <h2 className={styles.categoryHeader}>Or choose from top headlines from categories below</h2>
      <ul className={styles.categoryList}>
        {categories.map((category) => (
          <li key={category.slug} className={styles.category}>
            <CategoryCard slug={category.slug}>
              {category.name}
            </CategoryCard>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default HomePage