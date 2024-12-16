import React, { useState, useEffect } from 'react'
import styles from './Settings.module.css'
import ServiceManagement from '../ServiceManagement/ServiceManagement'

const Settings = () => {
  const [activeTab, setActiveTab] = useState('services')

  return (
    <div className={styles.settingsContainer}>
      <div className={styles.tabNavigation}>
        <button
          className={`${styles.tabButton} ${activeTab === 'services' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('services')}
        >
          Services
        </button>
        {/* Add more tabs as needed */}
      </div>

      <div className={styles.tabContent}>
        {activeTab === 'services' && <ServiceManagement />}
      </div>
    </div>
  )
}

export default Settings
