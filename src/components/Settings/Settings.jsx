import React, { useState, useEffect } from 'react'
import styles from './Settings.module.css'
import ServiceManagement from '../ServiceManagement/ServiceManagement'
import SideNavigation from '../SideNavigation/SideNavigation'

const Settings = () => {
  const [activeTab, setActiveTab] = useState('services')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMenuOpen && !e.target.closest(`.${styles.sidebarWrapper}`) && !e.target.closest(`.${styles.menuButton}`)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMenuOpen])

  return (
    <div className={styles.pageContainer}>
      <button
        className={styles.menuButton}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label='Toggle menu'
      >
        <ion-icon name={isMenuOpen ? 'close-outline' : 'menu-outline'} />
      </button>

      <div className={styles.mainContainer}>
        {/* Sidebar */}
        <aside className={`${styles.sidebarWrapper} ${isMenuOpen ? styles.menuOpen : ''}`}>
          <SideNavigation />
        </aside>

        {/* Main content */}
        <main className={styles.contentSection}>
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
        </main>
      </div>
    </div>
  )
}

export default Settings
