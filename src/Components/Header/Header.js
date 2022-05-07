import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const Header = () => {
    return (
      <div className='md:flex w-full bg-[#7130be] hover:sticky hover:top-0 text-stone-50'>
        <div className="flex mx-auto my-auto p-4">
          <img src={logo} alt="LogoImage" className='w-12 h-10'/>
          <h5 className='md:text-xl md:font-bold'>Neurosurgical Instruments Ltd</h5>
        </div>
        <nav className='p-2 md:text-xl mx-auto my-auto md:font-semibold'>
          <Link className='mr-4' to="/home">Home</Link>
          <Link className='mr-4' to="/products">Products</Link>
          <Link className='mr-4' to="/inventory/:id">Inventory</Link>
          <Link className='mr-4' to="/blogs">Blogs</Link>
          <Link className='mr-4' to="/logIn">LogIn</Link>
        </nav>
      </div>
    );
};

export default Header;