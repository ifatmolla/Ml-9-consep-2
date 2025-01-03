import { useContext } from "react";
import { Authcontext } from "./Authprovider";

const MyAppoinments = () => {
    const contextvalue = useContext(Authcontext)
    console.log(contextvalue)
    return (
        <div>
            apponments
        </div>
    );
};

export default MyAppoinments;