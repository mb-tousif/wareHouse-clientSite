import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.png';

const Header = () => {
    return (
      <div className='md:flex bg-[#7130be] text-stone-50'>
        <div className="flex p-4">
          <img src={logo} alt="LogoImage" className='w-12 h-10'/>
          <h5 className='md:text-xl font-bold'>Neurosurgical Instruments</h5>
        </div>
        <nav className='p-2 md:text-xl mx-auto my-auto font-semibold'>
          <Link className='mr-4 justify-end' to="/home">Home</Link>
          <Link className='mr-4 justify-end' to="/products">Products</Link>
          <Link className='mr-4 justify-end' to="/inventory">Inventory</Link>
          <Link className='mr-4 justify-end' to="/blog">Blogs</Link>
          <Link className='mr-4 justify-end' to="/logIn">Log In</Link>
        </nav>
      </div>
    );
};

export default Header;