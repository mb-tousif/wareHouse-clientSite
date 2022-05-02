import React from "react";
import useData from "../../hooks/useData";
import ManageItems from "../ManageItems/ManageItems";

const ManageInventory = () => {
    const [instruments] = useData();
  return (
    <div className="">
      <h1>Manage Your Neurosurgical Instruments </h1>
      <div className="md:grid grid-cols-2 gap-4">
        {instruments.map((instrument) => (
          <ManageItems key={instrument._id} instrument={instrument} />
        ))}
      </div>
    </div>
  );
};

export default ManageInventory;
