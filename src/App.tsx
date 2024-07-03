
import './App.css'
import { Routes,Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import { AuthProvider } from './context/auth'
import PublicRoutes from './routes/PublicRoutes'

function App() {
  

  return (
    <>
    <AuthProvider>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={
        <PublicRoutes> <SignUp /></PublicRoutes>} />
   </Routes>
    </AuthProvider>
   
    </>
    
    
  )
}

export default App
