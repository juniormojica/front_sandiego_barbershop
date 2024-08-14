
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Landing from './components/Landing/Landing.jsx'
import SignIn from './components/SignIn/SignIn.jsx';
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<div className='container'>
          <Landing />
        </div>} />

        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </Router>

  )
}

export default App
