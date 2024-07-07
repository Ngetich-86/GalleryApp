
import { signOut } from "firebase/auth"
import { auth } from "../firebase/config"
import { useNavigate } from "react-router-dom"


const Navbar = () => {
  const navigate = useNavigate();
  // const handleLoginLink = () => {
  //   navigate("/login"); 
  // };
  const handleLogOut =async () =>{
    try{
      await signOut(auth)
      // console.log('logged out')
      navigate('/login')


    }
    catch(error){
      console.log(error.message)

    }
    
  
  }
  return (

<div className="navbar bg-success">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Gallery App</a>
  </div>
  <div className="flex-none">
  {/* <button onClick={handleLoginLink} className="btn btn-sm">Login</button> */}
  <button onClick={handleLogOut}>Logout</button>
  </div>
</div>
  )
}

export default Navbar