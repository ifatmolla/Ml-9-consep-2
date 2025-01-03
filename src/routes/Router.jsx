import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Components/Mainlayout/Mainlayout";
import Home from "../Components/Mainlayout/Home";
import MyAppoinments from "../Components/MyAppoinments";
import AllTreatments from "../Components/AllTreatments";
import Profile from "../Components/Profile";
import Banner from "../Components/Banner";
import Details from "../Components/Details";
import Login from "../Components/Login";
import Register from "../Components/Register";
import PrivateRoute from "../Components/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout />, // Mainlayout component
        children: [
            {
                path: "/",
                element: <Home />,  // Home component
                loader: async () => {
                    const sirvicesres = await fetch("/sirvice.json");
                    const sirvicesdata = await sirvicesres.json()

                    const feedbackres = await fetch("/happyclints.json")
                    const feedbackdata = await feedbackres.json()

                    return {sirvicesdata,feedbackdata}
                },
            },
            {
                path: "/appoinments",
                element: <MyAppoinments />,  // MyAppoinments component
            },
            {
                path: "/allteatments",
                element: <AllTreatments />,  // AllTreatments component
                loader: () => fetch("/sirvice.json"), // Data fetching for Home
            },
            {
                path: "/profile",
                element: <Profile />,  // Profile component
            },
            {
                path: "/banner",
                element: <Banner />,  // Banner component
            }, 
            {
                path: "/details/:id",
                element: <PrivateRoute>
                    <Details></Details>
                </PrivateRoute>,  
                loader: async ({params})=> {
                  const res = await fetch("/sirvice.json")
                  const data = await res.json()
                 const singledata = data.find(d=>d.id == params.id)
                 return singledata
                }
            },

            {
                path: "/login",
                element:<Login></Login>,
            },
            {
                path: "/register",
                element:<Register></Register>,
            },
        ],
    },
]);

export default router;
