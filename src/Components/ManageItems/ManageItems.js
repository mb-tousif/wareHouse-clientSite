import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { RiAddBoxFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import useData from "../../hooks/useData";
const ManageItems = ({ instrument }) => {
  const navigate = useNavigate();
  const {_id, name, quantity, price, img } = instrument;
  const [instruments, setInstruments] = useData();
  const handleDelete = (id) => {
    const confirmYOu = window.confirm("are you confirm you want to delete");
    if (confirmYOu) {
      console.log(id);
      fetch(`https://peaceful-springs-15043.herokuapp.com/instrument/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = instruments.filter(
            (instrument) => instrument._id !== id
          );
          setInstruments(remaining);
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
        <button onClick={()=>navigate('/addItems')} className="ml-2 hover:text-[#7130be]">
          <RiAddBoxFill />
        </button>
        <button onClick={()=>handleDelete(instrument._id)} className="ml-2 hover:text-[#7130be]">
          <AiFillDelete />
        </button>
      </td>
    </tr>
  );
};

export default ManageItems;
