import { Outlet, Navigate } from "react-router-dom";
import SideBar from "../components/Sidebar";
import { useAuthContext } from "../hooks/useAuthContext";
import Login from "../auth/Login";

const PrivateRoutes = () => {
  const { user, authIsReady } = useAuthContext();

  return (
    <div className="flex h-screen">
      { user ? <SideBar  /> : <Login />}
      {/* { user ? <SideBar  /> : <Signup />} */}
      
    </div>
  );
};

export default PrivateRoutes;
