
import './App.css'
import { Routes,Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import { AuthProvider } from './context/auth'
import PublicRoutes from './routes/PublicRoutes'
import Login from './pages/Login'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <>
    <Navbar />
    <AuthProvider>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={
        <PublicRoutes> <SignUp /></PublicRoutes>} />
   </Routes>
    </AuthProvider>
   
    </>
    
    
  )
}

export default App
