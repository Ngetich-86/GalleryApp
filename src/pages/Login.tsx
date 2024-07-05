import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase/config";

const Login = () => {
    const [error, setError] = useState(false);
    const navigate = useNavigate();

const handleSubmit = async(e)=>{
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setError(true);
    }   
}
  return (
    <form onSubmit={handleSubmit}>
      {error&&<p>{error}</p>}
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login Now!</h1>
            <p className="py-6">
              Login to access all the features for free
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
              </div>
              <p>You don't have an account? <Link to="/signup">Sign Up</Link></p>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Login Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    
  )
}

export default Login