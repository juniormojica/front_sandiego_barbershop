import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import Landing from './components/Landing/Landing.jsx'
import SignIn from './components/SignIn/SignIn.jsx'
import DashBoard from './components/DashBoard/DashBoard.jsx'
import Client from './components/Clients/Client.jsx'
import Barbers from './components/Barbers/Barbers.jsx'
import SignUp2 from './components/SignUp/SingnUp2.jsx'
import PersonalInformation from './components/PersonalInformation/PersonalInformation.jsx'
import Footer from './components/Footer/Footer.jsx'
function App () {
  return (
    <Router>
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
          element={<><Barbers /></>}
        />
      </Routes>
      {/* Footer visible en todas las páginas */}
      <Footer />
    </Router>
  )
}

export default App
