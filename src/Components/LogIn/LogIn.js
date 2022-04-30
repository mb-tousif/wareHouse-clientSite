import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const navigate = useNavigate();
    return (
      <div className="mx-auto text-gray-600 my-auto mt-10">
        <form className='w-1/2 mx-auto my-auto bg-[#17324e] rounded-xl'>
          <h2 className="text-xl text-stone-50 m-2 font-bold p-2">Log In</h2>
          {/* <input className='w-3/4 rounded-xl p-2 m-2' type="text" name="name"/><br /> */}
          <input className='w-3/4 rounded-xl bg-slate-200 p-2 m-2' type="email" name="email"/><br />
          <input className='w-3/4 rounded-xl bg-slate-200 p-2 m-2' type="password" name='password' /><br />
          <input className='w-3/4 rounded-xl bg-slate-200 p-2 m-2' type="submit" value="Sign In" /><br />
          <p className="text-center text-stone-50 p-4">
          New Buyer?
          <span className="hover:bg-[#8661fe] ml-2 p-2 rounded-2xl" onClick={() => navigate("/register")}>
            Please Sign Up
          </span>
        </p>

        </form>
      </div>
    );
};

export default LogIn;