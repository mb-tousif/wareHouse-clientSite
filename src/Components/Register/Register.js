import React, { useState } from 'react';
import Github from '../../images/GitHub.png'
import Google from "../../images/google.svg";
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Register = () => {
  const location = useLocation();
  let from = location.state?.from?.pathname || "/inventory";
    const [agree, setAgree] = useState(false);
    const [createUserWithEmailAndPassword, user, loading, error] =
      useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);
  const navigate = useNavigate();

   if (googleLoading || githubLoading) {
     return toast.success("Registration Success");
   }
  if (googleError || githubError) {
    return toast.error("Something wrong with registration");
  }
 
   if (googleUser || githubUser) {
     navigate(from, { replace: true });
   }
      const handleSignUpForm = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const passwordConform = event.target.passwordConform.value;

        if (password !== passwordConform) {
          return toast.error("your password does not match");
        }
        if (password.length < 6) {
          return toast.error("please character up to 6 digit");
        }
        createUserWithEmailAndPassword(email, password);
        if (user) {
          navigate(from, { replace: true });
        }
      };

  return (
    <div className="mx-auto text-gray-600 my-auto mt-10 mb-10">
      <div className="bg-[#17849d] md:w-1/2 mx-auto my-auto rounded-2xl">
        <form
          onSubmit={handleSignUpForm}
          className="md:w-2/3 mx-auto my-auto rounded-xl"
        >
          <h2 className="text-xl text-stone-50 m-2 font-bold p-2">Sign Up</h2>
          <input
            className="md:w-3/4 rounded-xl bg-slate-200 p-2 m-2"
            type="email"
            name="email"
            placeholder="ENTER YOUR EMAIL"
          />
          <br />
          <input
            className="md:w-3/4 rounded-xl bg-slate-200 p-2 m-2"
            type="password"
            name="passwordConform"
            placeholder="Password Conform"
          />
          <br />
          <input
            className="md:w-3/4 rounded-xl bg-slate-200 p-2 m-2"
            type="password"
            name="password"
            placeholder="PASSWORD"
          />
          <br />
          <input
            onClick={() => setAgree(!agree)}
            type="checkbox"
            name="terms"
            id="terms"
          />
          <label
            className={`pl-2 ${agree ? "" : "text-red-700"}`}
            htmlFor="terms"
          >
            Accept Terms and Conditions?
          </label>
          <br />
          <input
            className="md:w-3/4 rounded-xl bg-slate-200 p-2 m-2"
            type="submit"
            value="Sign Up"
          />
        </form>
        <div className="text-center">
          <button
            onClick={() => signInWithGithub()}
            className="flex mt-6 md:w-2/3 mx-auto my-auto p-3 text-white rounded-xl shadow md:w-mb bg-[#7130be] hover:shadow md:w-lg focus:outline-none focus:ring-0 hover:bg-[#370772]"
          >
            <img className="md:w-12 h-8 mx-auto my-auto" src={Github} alt="" />
            <p className="inline-block mx-auto my-auto m-2 pl-2">
              Continue with GitHub
            </p>
          </button>
          <button
            onClick={() => signInWithGoogle()}
            className="flex mt-6 md:w-2/3 mx-auto my-auto p-3 text-white rounded-xl shadow md:w-mb bg-[#7130be] hover:shadow md:w-lg focus:outline-none focus:ring-0 hover:bg-[#370772]"
          >
            <img className="md:w-12 h-8 mx-auto my-auto" src={Google} alt="" />
            <p className="inline-block mx-auto my-auto m-2">
              Continue with Google
            </p>
          </button>
        </div>
        <p className="text-center text-stone-50 p-4">
          If you are user?
          <span
            className="hover:bg-[#8661fe] ml-2 p-2 rounded-2xl"
            onClick={() => navigate("/logIn")}
          >
            Please Log In
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;