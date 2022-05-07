import React from 'react';
import Github from '../../images/GitHub.png'
import Google from "../../images/google.svg";
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../Firebase.init';
const Register = () => {
    const Navigate = useNavigate();
     const handleRegister = async (event) => {
      //  const name = event.target.name.value;
       const email = event.target.email.value;
       const password = event.target.password.value;
       createUserWithEmailAndPassword(auth, email, password)
         .then(result => {
           const user = result.user;
           console.log(user);
         })
         .catch((error) => {
           const errorCode = error.code;
           const errorMessage = error.message;
         });
event.preventDefault();
};
    return (
      <div className="mx-auto text-gray-600 my-auto mt-10 mb-10">
        <div className="bg-[#17849d] md:w-1/2 mx-auto my-auto rounded-2xl">
          <form onSubmit={handleRegister} className="md:w-2/3 mx-auto my-auto rounded-xl">
          <h2 className="text-xl text-stone-50 m-2 font-bold p-2">Sign Up</h2>
          <input className="md:w-3/4 rounded-xl p-2 m-2" type="text" name="name" placeholder='ENTER YOUR NAME' />
          <br />
          <input className="md:w-3/4 rounded-xl bg-slate-200 p-2 m-2" type="email" name="email" placeholder='ENTER YOUR EMAIL'/>
          <br />
          <input className="md:w-3/4 rounded-xl bg-slate-200 p-2 m-2" type="password" name="password" placeholder='PASSWORD'/>
          <br />
          <input className="md:w-3/4 rounded-xl bg-slate-200 p-2 m-2" type="submit" value="Sign In"/>
          </form>
        <div className="text-center">
          <button className="flex mt-6 md:w-2/3 mx-auto my-auto p-3 text-white rounded-xl shadomd:w-mb bg-[#7130be] hover:shadomd:w-lg focus:outline-none focus:ring-0 hover:bg-[#370772]"><img className="md:w-12 h-8 mx-auto my-auto" src={Github} alt=""/><p className="inline-block mx-auto my-auto m-2 pl-2"> Continue with GitHub </p></button>
          <button className="flex mt-6 md:w-2/3 mx-auto my-auto p-3 text-white rounded-xl shadomd:w-mb bg-[#7130be] hover:shadomd:w-lg focus:outline-none focus:ring-0 hover:bg-[#370772]"><img className="md:w-12 h-8 mx-auto my-auto" src={Google} alt="" /><p className="inline-block mx-auto my-auto m-2">Continue with Google</p></button>
        </div>
        <p className="text-center text-stone-50 p-4">If you are user?<span className="hover:bg-[#8661fe] ml-2 p-2 rounded-2xl" onClick={() => Navigate("/logIn")}>Please Log In</span>
        </p>
        </div>
        
      </div>
    );
};

export default Register;