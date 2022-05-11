import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import { AiOutlineMenu } from "react-icons/ai";
const Header = () => {
    return (
<div className="navbar bg-[#7130be] text-stone-50">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex="0" className="btn btn-ghost lg:hidden">
        <span className='h-8 w-8 font-bold mx-auto my-auto'><AiOutlineMenu/></span> 
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#7130be] rounded-box w-52">
        <li><Link className='mr-4' to="/home">Home</Link></li>
        <li><Link className='mr-4' to="/inventory">Inventory</Link></li>
        <li><Link className='mr-4' to="/blogs">Blogs</Link></li>
        <li><Link className='mr-4' to="/logIn">LogIn</Link></li>
      </ul>
    </div>
    <div className="flex normal-case text-xl">
      <img src={logo} alt="LogoImage" className='w-12 h-10'/>
      <h5 className='md:text-xl md:font-bold'>Neurosurgical Instruments Ltd</h5>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
       <li><Link className='mr-4' to="/home">Home</Link></li>
        <li><Link className='mr-4' to="/inventory">Inventory</Link></li>
        <li><Link className='mr-4' to="/blogs">Blogs</Link></li>
        <li><Link className='mr-4' to="/logIn">LogIn</Link></li>
    </ul>
  </div>
</div>
    );
};

export default Header;