import { NavLink } from "react-router-dom";
import  "./Navbar.css";
const Navbar = () => {
    return (
        <div className="min-h-20 bg-blue-950 text-white flex justify-between items-center">
            
            <div className="ml-4">
            <h1 className="text-xl font-extrabold">TEETH WIZARD</h1>
            </div>
            <div className="">
            <NavLink className="ml-4" to="/">Home</NavLink>
            <NavLink className="ml-4" to="/appoinments">appoinments</NavLink>
            <NavLink className="ml-4" to="/allteatments">allteatments</NavLink>
            <NavLink className="ml-4" to="/profile">profile</NavLink>
            </div>
            <div className="mr-4">
               <NavLink to="/login">
               <button className="btn btn-primary">Login</button>
               </NavLink>
            </div>
        </div>
    );
};

export default Navbar;