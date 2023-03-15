import { createBrowserRouter } from "react-router-dom";
import AddClient from "../component/AddClient";
import Login from "../component/Login/Login";
import ViewClient from "../component/ViewClient";
import DashboardLayout from "../Layout/DashboardLayout";

export const router = createBrowserRouter([
    {
         path: '/',
         element: <Login/>
    },
    {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: "/dashboard",
                element: <ViewClient/>
            },
            {
                path: "/dashboard/add-client",
                element: <AddClient/>
            }
        ]
    }
])