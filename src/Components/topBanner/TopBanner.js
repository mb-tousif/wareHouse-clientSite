import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "../../images/topBanner.png";

const topBanner = () => {
  return (
    <div className="md:grid p-4 grid-cols-2">
      <div className="">
        <h1 data-aos="fade-down" data-aos-duration="3000" className="text-[#17849d] m-2 md:text-3xl font-medium">
          High Quality Neurosurgical Instruments
        </h1>
        <p className="text-justify text-[#286e7d]">
          Microsurgery and Neurosurgery, like almost every medical discipline,
          require standardized instruments. Surgical Instruments and their
          standardization have been Neurosurgical Instruments Ltd's core
          business for more than 15 years.
          <br />
          <br />
          The words, "Neurosurgical Instruments Ltd." have gained worldwide
          recognition as a synonym for unrivaled quality and reliability. Each
          of Neurosurgical Instruments Ltd's products is characterized by
          functionality and continuity. Through innovative new products and
          continuous development of existing products, Neurosurgical Instruments
          Ltd strives to make neurosurgical interventions safer and more
          efficient.
        </p>
      </div>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <img
          src={Banner}
          alt="Banner"
          className="mx-auto my-auto bg-[#d7dfe3] shadow-xl rounded-xl"
        />
      </div>
    </div>
  );
};
AOS.init();
export default topBanner;
