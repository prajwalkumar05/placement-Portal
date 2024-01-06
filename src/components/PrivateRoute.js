import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import SideBar from './Sidebar';
import Login from '../auth/Login';

const PrivateRoute = () => {

    const { user, authIsReady } = useAuthContext();

    console.log(authIsReady)
    // 


    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    // return authIsReady ? <Outlet /> : <Navigate to="/login" />;
        return authIsReady ? <SideBar  /> : <Login />;

}

export default PrivateRoute;
