import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Footer/Footer';
import Login from '../Component/Form/Login';
import Navbar from '../Component/NavBar/Navbar';

const Main = () => {
    return (
        <div>
           <Navbar/>
           <Outlet/>
           {/* <Login></Login> */}
           <Footer/>
        </div>
    );
};

export default Main;