import React from "react";
import useData from "../../hooks/useData";
import ManageItems from "../ManageItems/ManageItems";
import AOS from "aos";
import "aos/dist/aos.css";

const ManageInventory = () => {
    const [instruments] = useData();
  return (
      <div className="grid grid-cols-1">
        <h1 data-aos="fade-up-right" data-aos-easing="linear" data-aos-duration="2000" className="text-[#17849d] text-xl md:font-bold md:text-3xl m-4">Manage Your Neurosurgical Instruments </h1>
          <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-3/5 mx-auto my-auto mt-4 border text-center">
                <thead className="border-b text-white font-bold bg-[#5a9ec0]">
                  <tr>
                    <th scope="col" className="px-6 py-4">Item Names</th>
                    <th scope="col" className="px-6 py-4">Item Images</th>
                    <th scope="col" className="px-6 py-4">Items Quantities</th>
                    <th scope="col" className="px-6 py-4">Items Price</th>
                    <th scope="col" className="px-6 py-4">Action</th>
                  </tr>
                </thead>
                  <tbody>
                  {instruments.map((instrument) => (
                    <ManageItems key={instrument._id} instrument={instrument} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
  );
};
AOS.init();
export default ManageInventory;
