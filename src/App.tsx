
import './App.css'
import { Routes,Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Home from './pages/Home'

function App() {
  

  return (
    <>
   <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={<SignUp />} />
      {/* <Route path="dashboard" element={<Dashboard />} /> */}
   </Routes>
    </>
    
    
  )
}

export default App
