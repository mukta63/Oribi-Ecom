
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import RootLayOut from './components/layout/RootLayOut'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Shop from './components/pages/Shop'


function App() {
  
  return (
   <> 
     <Routes>
      <Route path="/" element={<RootLayOut />}>
        <Route index element={<Home/>} />          
        <Route path="shop"element={<Shop/>} />          
        <Route path="about" element={<About/>} />          
        <Route path="contact" element={<Contact/>} />          
     
      </Route>
    </Routes>
   </>
  )
}

export default App
