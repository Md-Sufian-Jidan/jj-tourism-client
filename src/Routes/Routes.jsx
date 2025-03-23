import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../Components/Error/Error";
import Home from "../Pages/Home/Home";
import AllTourist from "../Pages/AllTourist/AllTourist";
import AddTouristSpot from "../Pages/AddTouristSpot/AddTouristSpot";
import MyList from "../Pages/MyList/MyList";
import Login from "../Components/Authentication/Login/Login";
import Register from "../Components/Authentication/Register/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/all-tourist',
                element: <AllTourist />
            },
            {
                path: '/add-tourist-spot',
                element: <AddTouristSpot />
            },
            {
                path: '/my-list',
                element: <MyList />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
        ]
    },
]);