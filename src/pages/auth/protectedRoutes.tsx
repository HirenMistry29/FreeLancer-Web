import React from 'react';
import { Navigate } from "react-router-dom";
import { useUserAuth } from '../../context/UserAuthContext';

interface protectedRouteProps {
    children : any;
}

const ProtectedRoute:React.FC<protectedRouteProps> = ({ children }) => {
// const { user } = useUserAuth();
const  user  = true;
if(!user ){
    return <Navigate to="/login"/>;
}

return children ;
}
export default ProtectedRoute; 