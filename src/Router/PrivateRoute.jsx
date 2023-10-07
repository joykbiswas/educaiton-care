import { useContext } from "react";
import { AuthContext } from "../Component/AuthProvider/AuthProvider";
import { Navigate, useLocation,  } from "react-router-dom";


const PrivateRoute = ({children}) => {
    // const navigate = useNavigate
    const location = useLocation()


    const {user,loading} =useContext(AuthContext)
    if(loading){
       return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children
    }
   return <Navigate state={location.pathname}  to="/login"></Navigate>
     
    
};

export default PrivateRoute;