import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
const InventoryItems = ({instrument}) => {
  const { _id, name, img, description, price, quantity, supplier } = instrument;
  const id = useParams();
  const navigate = useNavigate();
 const handleQuantity = (event) => {
   event.preventDefault();
   if (event.target.update.value <= 0) {
     alert("quantity value is more then 0 please increase quantity");
   } else {
     const quantityData = {
       quantity: parseInt(event.target.update.value) + parseInt(quantity),
     };
     fetch(`https://peaceful-springs-15043.herokuapp.com/instruments${id}`, {
       method: "PUT",
       headers: {
         "content-type": "application/json",
       },
       body: JSON.stringify(quantityData),
     })
       .then((res) => res.json())
       .then((data) => {
         if (data) {
           toast("Instrument Quantity Updated!!");
           event.target.reset();
         }
       });
   }
 };

 const delivery = (event) => {
   if (quantity === 0 || quantity < 0) {
     toast.error(
       "quantity value is less then 0 please increase quantity increased quantity"
     );
   } else {
     const quantityData = {
       quantity: parseInt(quantity) -1,
     };
     fetch(`https://peaceful-springs-15043.herokuapp.com/instrument/${id}`, {
       method: "PUT",
       headers: {
         "content-type": "application/json",
       },
       body: JSON.stringify(quantityData),
     })
       .then(res=>res.json())
       .then((data) => {
         console.log("success data", data);
         event.target.reset();
       });
   }
 };
  return (
    <div
      data-aos="flip-right"
      data-aos-easing="ease-in-sine"
      data-aos-duration="4000"
      className="mx-auto my-auto mt-2 mb-2 text-[#17849d]"
    >
      <div className="rounded-lg shadow-2xl m bg-[#d7dfe3] max-w-sm">
        <img className="rounded-t-lg h-72" src={img} alt="product" />
        <div className="p-6">
          <h5 className="font-medium text-wrap mb-2">ID: {_id}</h5>
          <h5 className="text-xl font-medium mb-2">Name: {name}</h5>
          <p className="text-base mb-4">Details:{description}</p>
          <p className="text-base mb-4">
            Price: &#36; <span>{price}</span>
          </p>
          <p className="text-base mb-4">Available In Stock: {quantity}</p>
          <p className="text-base mb-4">Supplier: {supplier}</p>
          <button
            onClick={delivery}
            type="button"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="2000"
            className="mx-auto mr-2 my-auto p-3 bg-[#17849d] text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-[#7130be] hover:shadow-lg focus:bg-[#8a3beb] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#2c0260] active:shadow-lg transition duration-150 ease-in-out"
          >
            Delivered
          </button>
          <button
            type="button"
            onClick={() => navigate("/addItems")}
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="2000"
            className="mx-auto my-auto p-3 bg-[#17849d] text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-[#7130be] hover:shadow-lg focus:bg-[#8a3beb] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#2c0260] active:shadow-lg transition duration-150 ease-in-out"
          >
            ADD Item
          </button>
          <div className="grid grid-cols-1mx-auto">
            <form onSubmit={handleQuantity}>
              <input type="number" className="w-3/4 rounded-xl bg-slate-200 p-2 m-2" name="update" required placeholder="Quantity"/>
              <button className="social-btn add-item w-100">Update Quantity</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryItems;