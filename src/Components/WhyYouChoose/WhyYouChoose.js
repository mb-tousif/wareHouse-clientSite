import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import whyUs from '../../images/whyYouChooseUs.png'

const WhyYouChoose = () => {
    return (
      <div className="mt-4 mb-4">
        <h1 data-aos="fade-up"data-aos-duration="3000"className="text-[#17849d] m-2 md:text-3xl font-bold">WHY CHOOSE US?</h1>
        <div className="md:grid md:grid-cols-2">
          <div className="w-4/6 text-justify mx-auto my-auto text-[#46666d]">
            <p className="mt-4" data-aos="fade-down-right">
              <span className="font-bold">“Neurosurgical Instruments Ltd's”</span>
              is the leading medical and health equipment supplier in
              Bangladesh. We are incorporated as a joint-stock company,
              established in 2007.
            </p>
            <p className="mt-4" data-aos="fade-up-right">
              Our mission is to provide the best service and widest the range of
              high quality Neurosurgical equipments in the health and medical
              sector.
            </p>
            <p className="mt-4 mb-4" data-aos="fade-down-left">
              Our vision is to maintain our position as the market leader in our
              fields of business and to expand our market to all corners of the
              country and aboard, while fulfilling our environmental, social and
              economic responsibilities.
            </p>
          </div>
          <div>
            <img className="mx-auto my-auto" data-aos="zoom-in-left" src={whyUs}alt="CoreValue"/>
          </div>
        </div>
      </div>
)};
AOS.init();
export default WhyYouChoose;