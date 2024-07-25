import React from 'react'

import styles from './styles.module.css'

type Props = {
  left: React.ReactNode
  center: React.ReactNode
  right: React.ReactNode
}

const ThreeColumnLayout: React.FC<Props> = ({
  left,
  center,
  right,
}) => {
  return (
    <div className={styles.layout}>
      <aside className={styles.leftSection} data-testid="left-section">
        <div className={styles.leftChild}>
          {left}
        </div>
      </aside>
      <div className={styles.centerSection} data-testid="center-section">
        {center}
      </div>
      <aside className={styles.rightSection} data-testid="right-section">
        <div className={styles.rightChild}>
          {right}
        </div>
      </aside>
    </div>
  )
}

export default ThreeColumnLayout