import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Authcontext } from "./Authprovider";

const Register = () => {
    const [error, setError] = useState('')
    const {handleregister} = useContext(Authcontext)
    const handlesubmit = (e)=> {
    e.preventDefault()
    setError("")
    const name = e.target.name.value
    const password = e.target.password.value
    const confirmpassword = e.target.confirmpassword.value
    const email = e.target.email.value
    if(password !== confirmpassword){
        setError('password did.nt match')
        return;
    }
    if(password.length < 6){
        setError(' password must containt at least 6 charectars')
        return;
    }
    if(!/[a-z]/.test(password)){
        setError('pasword must cotant at least one lopwarcase latter')
        return;
    }
    // BEST OWE
    if(!/[A-Z]/.test(password)){
        setError('pasword must cotant at least one appercase latter')
        return;
    }
    console.log(name, password, confirmpassword, email)
    handleregister(email, password)
    }
    return (
        <div>
          <form action="" onSubmit={handlesubmit}>
           name <div>
                <input type="text" placeholder="Type here" name="name" className="input input-bordered w-full max-w-xs"   />
            </div> 
           email <div>
                <input type="text" placeholder="Type here" name="email" className="input input-bordered w-full max-w-xs" />
            </div> 
            password<div>
                <input type="text" placeholder="Type here" name="password" className="input input-bordered w-full max-w-xs" />
            </div> 

           confirmpassword <div>
                <input type="text" placeholder="Type here" name="confirmpassword" className="input input-bordered w-full max-w-xs" />
            </div> 

           

           
   <button>register</button>
          </form>
          {error && <p className="text-red-500">{error}</p>}
        </div>
    );
};

export default Register;