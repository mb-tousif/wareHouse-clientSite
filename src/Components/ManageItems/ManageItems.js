import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { RiAddBoxFill } from "react-icons/ri";
const ManageItems = ({ instrument }) => {
  const {_id, name, quantity, price, img } = instrument;
  const [addItem, setAddItem] = useState();
  const handleDelete = (id) => {
    const confirmYOu = window.confirm("are you confirm you want to delete");
    if (confirmYOu) {
      console.log(id);
      fetch(`http://localhost:5000/instruments/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) 
          console.log("success data", data);
          const remaining = addItem.filter(
            (instrument) => instrument._id !== id
          );
          setAddItem(remaining);
        });
    }
  };
  return (
    <tr class="bg-white border-b">
      <td class="md:px-6 md:py-4 whitespace-wrap text-gray-900">{name}</td>
      <td class="text-sm font-light md:px-6 md:py-4 whitespace-wrap">
        <img src={img} alt="productImage" className="rounded-full w-20 h-14 mx-auto my-auto"/>
      </td>
      <td class="text-sm text-gray-900 md:px-6 md:py-4 whitespace-wrap">
        {quantity}
      </td>
      <td class="text-sm text-gray-900 md:px-6 md:py-4 whitespace-wrap">
        &#36; {price}
      </td>
      <td class="font-bold text-2xl text-gray-700 md:px-6 md:py-4 whitespace-wrap">
        <button className="ml-2 hover:text-[#7130be]">
          <RiAddBoxFill />
        </button>
        <button onClick={handleDelete} className="ml-2 hover:text-[#7130be]">
          <AiFillDelete />
        </button>
      </td>
    </tr>
  );
};

export default ManageItems;
