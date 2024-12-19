import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import AppContent from './components/AppContent/AppContent.jsx'
function App () {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
