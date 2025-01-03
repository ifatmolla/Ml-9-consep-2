import { useLoaderData } from "react-router-dom";
import Sirvices from "./Sirvices";

const AllTreatments = () => {
    const sirvices = useLoaderData()
    return (
        <div className="grid grid-cols-4 w-[80%] gap-5 shadow-lg mt-6 mx-auto max-w-[1400px]">
          {
                sirvices.map(sirvice=> <Sirvices key={sirvice} sirvice={sirvice}></Sirvices>)
            }
        </div>
    );
};

export default AllTreatments;