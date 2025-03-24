import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../Components/Error/Error";
import Home from "../Pages/Home/Home";
import AllTourist from "../Pages/AllTourist/AllTourist";
import AddTouristSpot from "../Pages/AddTouristSpot/AddTouristSpot";
import MyList from "../Pages/MyList/MyList";
import Login from "../Components/Authentication/Login/Login";
import Register from "../Components/Authentication/Register/Register";
import PrivateRoute from "./PrivateRoute";
import TouristDetails from "../Components/TouristDetails/TouristDetails";
import SingleTouristDetails from "../Components/SingleTouristDetails/SingleTouristDetails";
import UpdateTouristSpot from "../Components/UpdateTouristSpot/UpdateTouristSpot";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/all-tourist',
                element: <AllTourist />,
                loader: () => fetch(`${import.meta.env.VITE_LOCALHOST_API}/all-tourist-place`)
            },
            {
                path: '/add-tourist-spot',
                element: <PrivateRoute><AddTouristSpot /></PrivateRoute>
            },
            {
                path: '/my-list',
                element: <PrivateRoute><MyList /></PrivateRoute>
            },
            {
                path: '/spot/:id',
                element: <PrivateRoute><TouristDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_LOCALHOST_API}/tourist-spot/${params?.id}`)
            },
            {
                path: '/tourist-place/:id',
                element: <PrivateRoute><SingleTouristDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_LOCALHOST_API}/tourist-place/${params?.id}`)
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><UpdateTouristSpot /></PrivateRoute>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_LOCALHOST_API}/tourist-place/${params?.id}`)
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
        ],
    },
]);