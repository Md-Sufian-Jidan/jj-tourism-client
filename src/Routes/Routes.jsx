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
                element: <AllTourist />
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
                element: <TouristDetails />,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_LOCALHOST_API}/tourist-spot/${params?.id}`)
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