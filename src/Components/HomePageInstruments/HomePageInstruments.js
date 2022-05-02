import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
const HomePageInstruments = ({ instrument }) => {
  const { name, img, description, price, quantity, supplier } = instrument;
  const navigate = useNavigate();
  
  return (
    <div
      data-aos="flip-right"
      data-aos-easing="ease-in-sine"
      data-aos-duration="4000"
      className="flex justify-center m-6 text-[#17849d]"
    >
      <div className="rounded-lg shadow-2xl bg-[#d7dfe3] max-w-sm">
        <img className="rounded-t-lg h-72" src={img} alt="product" />
        <div className="p-6">
          <h5 className="text-xl font-medium mb-2">{name}</h5>
          <p className="text-base mb-4">{description}</p>
          <p className="text-base mb-4">
            Price: &#36; <span>{price}</span>
          </p>
          <p className="text-base mb-4">Available In Stock: {quantity}</p>
          <p className="text-base mb-4">Supplier: {supplier}</p>
          <button
            type="button"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2000"
            className=" inline-block px-6 py-2.5 bg-[#17849d] text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-[#7130be] hover:shadow-lg focus:bg-[#8a3beb] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#2c0260] active:shadow-lg transition duration-150 ease-in-out"
          >
            Update Stock
          </button>
          <button
            onClick={()=>navigate('/inventory/:id')}
            type="button"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="2000"
            className="mt-4 inline-block px-6 py-2.5 bg-[#17849d] text-white rounded-full shadow-md hover:bg-purple-700 focus:bg-purple-600 focus:shadow-lg focus:outline-none active:bg-purple-900 transition duration-150 ease-in-out"
          >
            Manage Inventories &#10148;
          </button>
        </div>
      </div>
    </div>
  );
};
AOS.init();
export default HomePageInstruments;
