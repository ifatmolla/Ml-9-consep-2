import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Mainlayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="w-[80%] mx-auto max-w-[1400px]">
            <Outlet></Outlet>
            </div>
           
        </div>
    );
};

export default Mainlayout;