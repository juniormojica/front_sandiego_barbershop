import '../../App.jsx'
import { Routes, Route, useLocation } from 'react-router-dom'
import Landing from '../Landing/Landing.jsx'
import ConditionalSideNavigation from '../ConditionalSideNavigation/ConditionalSideNavigation.jsx'
import ConditionalCompanyLogo from '../ConditionalCompanyLogo/ConditionalCompanyLogo.jsx'
import SignIn from '../SignIn/SignIn.jsx'
import SignUp2 from '../SignUp/SingnUp2.jsx'
import DashBoard from '../DashBoard/DashBoard.jsx'
import Client from '../Clients/Client.jsx'
import BarbersManagement from '../BarbersManagement/BarbersManagement.jsx'
import PersonalInformation from '../PersonalInformation/PersonalInformation.jsx'
import Settings from '../Settings/Settings.jsx'
import Footer from '../Footer/Footer.jsx'
function AppContent () {
  return (
    <div className='appContainer'>
      <div className='mobileNavigation'>
        <ConditionalSideNavigation />
      </div>

      <main className='mainContent container'>
        <ConditionalCompanyLogo />

        <div className='contentWrapper'>

          <div className='routesContent'>
            <Routes>
              <Route path='/' element={<Landing />} />
              <Route path='/signin' element={<SignIn />} />
              <Route path='/signup' element={<SignUp2 />} />
              <Route path='/dashboard' element={<DashBoard />} />
              <Route path='/clients' element={<Client />} />
              <Route path='/barbers' element={<BarbersManagement />} />
              <Route path='/personal-info' element={<PersonalInformation />} />
              <Route path='/settings' element={<Settings />} />
            </Routes>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default AppContent
