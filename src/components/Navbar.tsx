
import { signOut } from "firebase/auth"
import { auth } from "../firebase/config"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  const navigate = useNavigate();
  // const handleLoginLink = () => {
  //   navigate("/login"); 
  // };
  const handleLogOut =async () =>{
    try{
      await signOut(auth)
      // console.log('logged out')
      toast.success('Logged out successfully!');
      navigate('/login')
    }
    catch(error){
      // console.log(error.message)
      toast.error(`Error logging out: ${error.message}`);

    }
    
  
  }
  return (
    <>
    <div className="navbar bg-success">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">📸Gallery App</a>
  </div>
  <div className="flex-none">
  <button onClick={handleLogOut}>🚪Logout</button>
  </div>
</div>
<ToastContainer />
</>
  )
}

export default Navbar