import React from 'react';

const InventoryItems = ({instrument}) => {
  const { _id, name, img, description, price, quantity, supplier } = instrument;

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
          <h5 className="text-xl font-medium mb-2">{name}</h5>
          <p className="text-base mb-4">{description}</p>
          <p className="text-base mb-4">
            Price: &#36; <span>{price}</span>
          </p>
          <p className="text-base mb-4">Available In Stock: {quantity}</p>
          <p className="text-base mb-4">Supplier: {supplier}</p>
          <button
            type="button"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="2000"
            className="mx-auto mr-2 my-auto p-3 bg-[#17849d] text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-[#7130be] hover:shadow-lg focus:bg-[#8a3beb] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#2c0260] active:shadow-lg transition duration-150 ease-in-out"
          >Delivered</button>
          <button
            type="button"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="2000"
            className="mx-auto my-auto p-3 bg-[#17849d] text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-[#7130be] hover:shadow-lg focus:bg-[#8a3beb] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#2c0260] active:shadow-lg transition duration-150 ease-in-out"
          > ADD Item </button>
        </div>
      </div>
    </div>
  );
};

export default InventoryItems;