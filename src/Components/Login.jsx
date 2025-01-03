import { useContext, useState } from "react";
import { Authcontext } from "./Authprovider";

const Login = () => {
    const [error, setError] = useState('')
    const {handlegooglelogin ,handlelogin} = useContext(Authcontext)
    const handlesubmit = (e)=> {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        handlelogin(email, password)
        .then(res=>{

        })
        .catch(err=>{
            console.log(err.message)
          setError(err.message)})
        }
        
    return (
        <div>
           <form action="" onSubmit={handlesubmit}>
           
           <div>
                <input type="text" placeholder="Type here" name="email" className="input input-bordered w-full max-w-xs" />
            </div> 

            <div>
                <input type="text" placeholder="Type here" name="password" className="input input-bordered w-full max-w-xs" />
            </div> 
           

           
   <button>Login</button>
          </form>
          {error && <p className="text-red-500">{error.split('/')}</p>}
          <button onClick={handlegooglelogin}>google login</button>
          {/* <button onClick={handlelogout}>Logout</button> */}
        </div>
    );
};

export default Login;