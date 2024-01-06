import React from "react";
import SideBar from "../components/Sidebar";
import Login from "../auth/Login";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useAuthContext } from "../hooks/useAuthContext";
import AuthRouter from "../auth/AuthRouter";
import Signup from "../auth/Signup";


const Rootlayout = () => {

 const {user,authIsReady} = useAuthContext()

 

 console.log()

  return (
    <div className="flex h-screen">
      { user ? <SideBar  /> : <Login />}
      {/* { user ? <SideBar  /> : <Signup />} */}
      
    </div>
  );
};

export default Rootlayout;
