import React from "react";
import valuePicture from "../../images/corevalue.png";

const CoreValues = () => {
  return (
    <div className="mt-6 mb-6">
      <h1
        data-aos="fade-up"
        data-aos-duration="3000"
        className="text-[#17849d] m-2 md:text-3xl font-bold"
      >
        Our Core Values!
      </h1>
      <div className="md:grid grid-cols-2">
        <div className="w4/6 ml-4 text-justify mx-auto my-auto text-[#46666d]">
          <h1 data-aos="fade-down" className="m-2 md:text-xl">
            INTEGRITY!
          </h1> 
          <p data-aos="fade-up-right">
            We are ethical, sincere and concentrate on what we do best.
            Everything we do must stand the test of public scrutiny.
          </p>
          <h1 data-aos="fade-right" className="m-2 md:text-xl">
            INNOVATION!
          </h1>
          <p data-aos="fade-down-right">
            Respond to dynamic market and products changes. We are bold and
            agile, dauntlessly taking on challenges, using deep customer insight
            to provide the best and updated equipments.
          </p>
          <h1 data-aos="fade-up" className="m-2 md:text-xl">
            OUR MOTTO!
          </h1>
          <p data-aos="fade-down-right">
            "Growing through innovation and creativity for Smooth Surgical
            Support."
          </p>
        </div>
        <div>
          <img
            className="mx-auto my-auto"
            data-aos="zoom-in-left"
            src={valuePicture}
            alt="CoreValue"
          />
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
