import { BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css'

import Navbar from './components/Navbar'

import Home from './pages/Home';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  

  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
