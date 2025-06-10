import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllRooms from "../Pages/AllRooms";
import Loading from "../Components/Loading/Loading";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path : '/rooms', 
                Component: AllRooms,
                loader: () => fetch('http://localhost:3000/rooms'),
                hydrateFallbackElement: <Loading></Loading>
            }
        ] 
    }
])