
import { signOut } from "firebase/auth"
import { auth } from "../firebase/config"
import { useNavigate } from "react-router-dom"


const Navbar = () => {
  const navigate = useNavigate();
  const handleLogOut =async () =>{
    try{
      await signOut(auth)
      console.log('logged out')
      navigate('/signup')


    }
    catch(error){
      console.log(error.message)

    }
  
  }
  return (
    <div className="navbar bg-base-100 justify-between">
  <a className="font-bold text-xl underline">GalleryApp🎇</a>
  <button onClick={handleLogOut}>Logout</button>
</div>
  )
}

export default Navbar