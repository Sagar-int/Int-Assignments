import { useSelector } from "react-redux/es/exports";
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const {isloggedin } = useSelector((state) => state.AuthReducer);

    return isloggedin ? children : <Navigate to="/login" />;
}

export default PrivateRoute
