import React from 'react';

const Footer = () => {
    return (
      <footer className="p-10 bg-[#9567ce] text-stone-50">
        <div className="font-bold text-center">
          <p>
            Neurosurgical Instruments Ltd.
            <br />
            The Best Neurosurgical Instruments Supplier.
          </p>
          <p>
            Copyright &#169; {new Date().getFullYear()} - All right reserved
          </p>
        </div>
      </footer>
    );
};

export default Footer;