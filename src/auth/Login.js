import React from "react";
import { useLogin } from "../hooks/useLogin";
import { useState } from "react";

import {useNavigate,Link} from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()

  const {login} = useLogin()

  const [username,setuserName] = useState();
  const [password,setPassword] = useState();

  

  const onSubmit = () =>{
    login(username,password)
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="  ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            
          </p>
        </div>
        <div className="card flex-shrink-0 w-[800px] max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                onChange={(e) => setuserName(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="label">
                <Link to="/signup" className="label-text-alt link link-hover">
                  Sign up
                </Link>

                
              </label>
            </div>
            <div className="form-control mt-6">
              <button onClick={onSubmit} className="btn btn-primary">Login</button>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
