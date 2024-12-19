import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Landing from './components/Landing/Landing.jsx'
import SignIn from './components/SignIn/SignIn.jsx'
import DashBoard from './components/DashBoard/DashBoard.jsx'
import Client from './components/Clients/Client.jsx'
import BarbersManagement from './components/BarbersManagement/BarbersManagement.jsx'
import SignUp2 from './components/SignUp/SingnUp2.jsx'
import PersonalInformation from './components/PersonalInformation/PersonalInformation.jsx'
import Footer from './components/Footer/Footer.jsx'
import Settings from './components/Settings/Settings.jsx'
import ConditionalSideNavigation from './components/ConditionalSideNavigation/ConditionalSideNavigation.jsx'
import ConditionalCompanyLogo from './components/ConditionalCompanyLogo/ConditionalCompanyLogo.jsx'

function App () {
  return (
    <Router>
      <div className='appContainer'>
        <div className='mobileNavigation'>
          <ConditionalSideNavigation />
        </div>

        <main className='mainContent container'>
          <ConditionalCompanyLogo />

          <div className='contentWrapper'>
            <div className='desktopNavigation'>
              <ConditionalSideNavigation />
            </div>

            <div className='routesContent'>
              <Routes>
                <Route
                  path='/'
                  element={<div><Landing /></div>}
                />

                <Route
                  path='/signin'
                  element={<SignIn variant='mainVariant' />}
                />

                <Route
                  path='/info'
                  element={<PersonalInformation />}
                />
                <Route path='/signup' element={<SignUp2 />} />
                <Route path='/dashboard' element={<DashBoard />} />
                <Route
                  path='/clients'
                  element={<><Client /></>}
                />

                <Route
                  path='/barbers'
                  element={<><BarbersManagement /></>}
                />
                <Route
                  path='/settings'
                  element={<><Settings /></>}
                />
              </Routes>
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </Router>
  )
}

export default App
