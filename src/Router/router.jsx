import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllRooms from "../Pages/AllRooms";
import Loading from "../Components/Loading/Loading";
import RoomDetails from "../Components/RoomDetails/RoomDetails";
import PrivateRoute from "./PrivateRoute";
import MyRooms from "../Pages/MyRooms";
import ErrorPage from "../Pages/ErrorPage";

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
                path: '/rooms',
                Component: AllRooms,
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: '/room/:id',
                loader: ({ params }) => fetch(`https://bookoro-server-side.vercel.app/rooms/${params.id}`),
                Component: RoomDetails,
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: '/myBookings',
                element: <PrivateRoute>
                    <MyRooms></MyRooms>
                </PrivateRoute>
            },
            {
                path: '*',
                Component: ErrorPage
            }
        ]
    },
])