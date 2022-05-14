import React from 'react';
import { toast } from "react-toastify";
const AddInstrument = () => {
    const handleAddItem =(event)=>{
        event.preventDefault()
       const name = event.target.name.value
       const description = event.target.description.value
       const supplier = event.target.supplier.value
       const link = event.target.link.value
       const price = event.target.price.value
       const newItem = {name, description , supplier ,link , price}
       console.log(name, description , supplier ,link , price)
       const url = "https://peaceful-springs-15043.herokuapp.com/instruments";
       fetch(url, {
         method: "POST",
         headers: {
           "content-type": "application/json",
         },
         body: JSON.stringify(newItem),
       })
         .then((res) => res.json())
         .then((result) => {
           if (result) {
             toast("Your instrument is added!!!");
             event.target.reset();
           }
         });
     }

    return (
      <div className="container mx-auto my-auto text-center mb-10">
        <div className="md:w-4/6 lg:w-5/6 shadow-xl rounded-xl sm:w-full lg:mt-16 md:mt-14 mt-10 mx-auto my-auto bg-[#17849d]">
            <h2 className="md:text-2xl text-xl m-2 p-2 md:font-bold text-stone-50">Create New Instrument</h2>
          <form onSubmit={handleAddItem}>
            <input type="text" className="bg-slate-200 border-none rounded-xl p-1 md:p-2 md:m-3 m-1 w-3/4" name="name" placeholder='Instrument Name' required />
            <br />
            <textarea type="text" className="bg-slate-200 border-none rounded-xl p-1 md:p-2 md:m-3 m-1 sm:w-3/4" name="description" placeholder='Description' required />
            <br />
            <input type="text" className="bg-slate-200 border-none rounded-xl p-1 md:p-2 md:m-3 m-1 w-3/4" name="link" placeholder='Image Link' required />
            <br />
            <input type="number" placeholder='Instrument Price' className="bg-slate-200 border-none rounded-xl p-1 md:p-2 md:m-3 m-1 w-3/4" name="price" required />
            <br />
            <input type="text" className="bg-slate-200 border-none rounded-xl p-1 md:p-2 md:m-3 m-1 w-3/4" placeholder='Supplier Name' name="supplier" required />
            <br />
            <button type='submit' className="bg-[#a467d6] border-none font-bold text-stone-50 rounded-xl p-1 md:p-2 md:m-3 m-1 w-1/2 hover:bg-[#7130be] active:bg-[#2c0260]">
              Add Instrument
            </button>
          </form>
        </div>
      </div>
    );
};

export default AddInstrument;