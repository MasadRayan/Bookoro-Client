import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Loading from '../Components/Loading/Loading';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {

    const {user, loading} = use(AuthContext);
    const location = useLocation()

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;