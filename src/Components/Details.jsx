import { useLoaderData } from "react-router-dom";
import Modal from "./Modal";

const Details = () => {
    const singledata = useLoaderData()
    console.log(singledata)
 
    return (
        <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${singledata.image})`,
        }}>
        <div className="hero-overlay bg-opacity-60">{singledata.cost}</div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{singledata.description}</h1>
            <p className="mb-5">
             {singledata.description}
            </p>
            <button onClick={()=>document.getElementById('my_modal_5').showModal()} className="btn btn-primary">Book Appoinment</button>
          </div>
        </div>
        <Modal></Modal>
      </div>
    );
};

export default Details;
