import React from 'react';
import useData from '../../hooks/useData';
import HomePageInstruments from '../HomePageInstruments/HomePageInstruments';
import AOS from "aos";
import "aos/dist/aos.css";
import TopBanner from '../topBanner/TopBanner';
import CoreValues from '../coreValues/CoreValues';
import Address from '../Address/Address';
import WhyYouChoose from '../WhyYouChoose/WhyYouChoose';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [instruments] = useData();
    const navigate = useNavigate();
    return (
      <div className="w-full">
        <marquee className="w-3/5 p-2 font-bold text-emerald-800" behavior="scroll" direction="left">&#9993; মাস্ক ব্যবহার করুন, নিরাপদ থাকুন।</marquee>
        <TopBanner />
        <h1 data-aos="fade-up" data-aos-duration="3000"
          className="md:text-3xl font-bold text-[#17849d] md:p-10">Our Some Leading Products</h1>
        <div className="md:grid gap-10 md:grid-cols-3">
          {instruments
            .map((instrument) => (
              <HomePageInstruments
                key={instrument._id}
                instrument={instrument}
              />
            ))
            .slice(4, 10)}
        </div>
        <button onClick={() => navigate("/manageInventory")}
            type="button" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2000"
            className="mt-4 mx-auto my-auto block p-3 bg-[#17849d] text-white rounded-full shadow-md hover:bg-purple-700 focus:bg-purple-600 focus:shadow-lg focus:outline-none active:bg-purple-900 transition duration-150 ease-in-out">Manage Inventories &#10148;</button>
        <CoreValues />
        <WhyYouChoose />
        <Address />
      </div>
    );
};
AOS.init();
export default Home;