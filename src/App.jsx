import React from 'react'
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Services from './components/pages/services/Services'
import About from './components/pages/about/About'
import Update from './components/pages/update/Update'
import Home from './components/pages/home/Home'
import Contact from './components/pages/contact/Contact'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/update' element={<Update />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
