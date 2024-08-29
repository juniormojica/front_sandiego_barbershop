
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Landing from './components/Landing/Landing.jsx'
import SignIn from './components/SignIn/SignIn.jsx';
import SignUp from './components/SignUp/SingnUp.jsx';
import DashBoard from './components/DashBoard/DashBoard.jsx';
import Client from './components/Clients/Client.jsx';
function App() {

  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<div><Landing /></div>} />

        <Route path='/signin' element={<SignIn variant='mainVariant' />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/dashboard' element={<DashBoard />} />
        <Route path='/clients' element={<>
          <Client />
        </> } />
      </Routes>
    </Router>

  )
}

export default App
