import { NavLink, useLoaderData } from "react-router-dom";
import Banner from "../Banner";
import Sirvices from "../Sirvices";
import Feedback from "../Feedback";

const Home = () => {
    const sirvices =  useLoaderData()
  
    const {sirvicesdata,feedbackdata} = sirvices
    return (
        <div className=" w[80%] mx-auto max-w-[1200px] mt-6">
            <h1 className="text-3xl ">  hi home</h1>
           <Banner></Banner>

           <div className="grid grid-cols-4 gap-5 shadow-lg">
            {
                sirvicesdata.slice(0,4).map(sirvice=> <Sirvices key={sirvice} sirvice={sirvice}></Sirvices>)
            }
           </div>
          <button className="btn-primary text-white px-3 mt-4  mx-auto block">
          <NavLink to="/allteatments">Show more</NavLink>
          </button>

          <Feedback feedbackdata={feedbackdata}></Feedback>
        </div>
    );
};

export default Home;