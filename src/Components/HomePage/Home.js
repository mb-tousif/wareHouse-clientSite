import React from 'react';
import useData from '../../hooks/useData';
import HomePageInstruments from '../HomePageInstruments/HomePageInstruments';
import AOS from "aos";
import "aos/dist/aos.css";
import TopBanner from '../topBanner/TopBanner';
import CoreValues from '../coreValues/CoreValues';
import Address from '../Address/Address';

const Home = () => {
    const [instruments] = useData();
    // console.log(instruments);
    return (
      <div>
        <marquee className="w-3/5 p-2 font-bold text-emerald-800" behavior="scroll" direction="left">&#9993; মাস্ক ব্যবহার করুন, নিরাপদ থাকুন। </marquee>
        <TopBanner/>
        <h1 data-aos="fade-up" data-aos-duration="3000" className="md:text-3xl font-bold text-[#17849d] md:p-10">Our Leading Products Inventory</h1>
        <div className="md:grid gap-10 md:grid-cols-3">
        {
        instruments.map(instrument =><HomePageInstruments key={instrument._id} instrument={instrument}/>).slice(4,10)
        }
        </div>
        <h1 data-aos="fade-up" data-aos-duration="3000" className="text-[#17849d] m-2 md:text-3xl font-bold">Our Core Values!</h1>
        <CoreValues/>
        <Address/>
      </div>
    );
};
AOS.init();
export default Home;