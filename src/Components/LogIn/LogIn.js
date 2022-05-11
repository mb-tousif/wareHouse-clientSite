import React, { useRef } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../Firebase.init";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const LogIn = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/inventory";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  if (loading) {
    return toast.success("User Loading!");
  }
  if (user) {
    navigate(from, { replace: true });
  }

  if (error) {
    return toast.error("Something wrong with Log in");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="mx-auto text-gray-600 my-auto mt-10 mb-8">
      <form
        className="w-1/2 mx-auto my-auto bg-[#17849d] rounded-xl"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl text-stone-50 m-2 font-bold p-2">Log In</h2>
        <input
          className="w-3/4 rounded-xl bg-slate-200 p-2 m-2"
          type="email"
          ref={emailRef}
          name="email"
        />
        <br />
        <input
          className="w-3/4 rounded-xl bg-slate-200 p-2 m-2"
          type="password"
          ref={passwordRef}
          name="password"
        />
        <br />
        <input
          className="w-3/4 rounded-xl bg-slate-200 p-2 m-2"
          type="submit"
          value="Sign In"
        />
        <br />
        <p className="text-center text-stone-50 p-4">
          New Buyer?
          <span
            className="hover:bg-[#8661fe] ml-2 p-2 rounded-2xl"
            onClick={() => navigate("/register")}
          >
            Please Sign Up
          </span>
        </p>
      </form>
    </div>
  );
};

export default LogIn;
