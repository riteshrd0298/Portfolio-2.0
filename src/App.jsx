import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import Home, {  AboutHeader } from './components/Home'
import  { ProjectHeader } from './components/Project'
import  { ResumeHeader } from './components/Resume'
import  { ContactHeader } from './components/contact'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/About' element={<AboutHeader/>}/>
          <Route path='/Project' element={<ProjectHeader/>}/>
          <Route path='/Resume' element={<ResumeHeader/>}></Route>
          <Route path='/Contact' element={<ContactHeader/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
