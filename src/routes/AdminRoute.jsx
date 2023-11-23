/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";


const AdminRoute = ({children}) => {
    const {user, loading} = useAuth()
    const {isAdmin, isAdminLoading} = useAdmin()
    const location = useLocation()

    if(loading || isAdminLoading){
        return <div className="mt-10 text-center"><progress className="progress w-56"></progress></div>
    }

    if(user && isAdmin){
        return children
    }

    return <Navigate to='/' state={{from : location}} replace></Navigate>
};

export default AdminRoute;