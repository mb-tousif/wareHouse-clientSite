import React from 'react';
import valuePicture from '../../images/corevalue.png'

const CoreValues = () => {
    return (
      <div className='md:grid grid-cols-2'>
        <div className="w4/6 m-4 text-left text-[#46666d]">
            <h1 data-aos="fade-down" className="m-2 md:text-xl">INTEGRITY!</h1>
            <p data-aos="fade-up-right">We are ethical and sincere, in our conduct; everything we do must stand the test of public scrutiny.</p>
            <h1 data-aos="fade-right" className="m-2 md:text-xl">INNOVATION!</h1>
            <p data-aos="fade-down-right">We are bold and agile, dauntlessly taking on challenges, using deep customer insight to develop uniquely innovative solutions.</p>
            <h1 data-aos="fade-up" className="m-2 md:text-xl">TEAMWORK!</h1>
            <p data-aos="fade-down-right">We are bold and agile, dauntlessly taking on challenges, using deep customer insight to develop uniquely innovative solutions.</p>
        </div>
        <div className="mx-auto my-auto">
            <img data-aos="zoom-in-left" src={valuePicture} alt="CoreValue" />
        </div>
      </div>
    );
};

export default CoreValues;