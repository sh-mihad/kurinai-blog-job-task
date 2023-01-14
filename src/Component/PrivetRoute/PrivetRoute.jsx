import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserAuth } from '../../ContexAPI/AuthProvider';

const PrivetRoute = ({children}) => {
    const{user,loading} = useContext(UserAuth)

    const location = useLocation()

   if(loading){
    return <div>Loading...</div>
   }
   console.log(user)
   if(user?.uid){
    console.log("15 no line")
    return children;
   }
   return <Navigate to="/login" state={{from:location}} replace></Navigate>
   

};

export default PrivetRoute;