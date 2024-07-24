import React from 'react'
import { Outlet } from 'react-router-dom'

import styles from './styles.module.css'

const Container:React.FC = () => {
  return (
    <main className={styles.main}>
      <Outlet />
    </main>
  )
}

export default Container