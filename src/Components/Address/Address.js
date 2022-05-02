import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
const Address = () => {
    return (
      <div className='p-8'>
        <h1
          data-aos="fade-down"
          data-aos-duration="3000"
          className="text-[#17849d] m-2 md:text-3xl font-bold p-4"
        >
          Our Offices
        </h1>
        <div className="md:grid grid-cols-3 gap-10 text-emerald-800">
          <div className="">
            <h2 className="font-bold">Sylhet Office:</h2>
            <p>2nd and 3rd floor, Shahjalal Plaza Mahendibag Point,</p>
            <p>Upashahor, Sylhet.</p>
            <p>Contact: +8801800000000</p>
          </div>
          <div className="">
            <h2 className="font-bold">Dhaka Office:</h2>
            <p>Road #00, House #07, Block #B,</p>
            <p>Section #12 Mirpur, Dhaka,</p>
            <p>Contact: +8801700000000</p>
          </div>
          <div className="">
            <h2 className="font-bold">Chattagram Office:</h2>
            <p>349/392 Kapashgola Chowkbazar,</p>
            <p>Chittagong 4203</p>
            <p>Contact: +8801300000000</p>
          </div>
        </div>
      </div>
    );
};
AOS.init();
export default Address;