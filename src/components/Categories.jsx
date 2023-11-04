import React from "react";
import category from "../assets/category.png";
import Wrapper from "./Wrapper";
function Categories() {
  const categories = [
    "Flight",
    'Bus',
    "Entertainment",
    "Jewellery",
    "Medicines",
    "Hosting",
    "Flowers",
    "Beauty",
    "OTT",
    "Bills",
    "Kids",
    "Travel",
    "Food",
    "Eyewear",
    "LifeStyle",
    "Kitchen",
    "Recharge",
    "Electronics",
    "Hotel",
    "Footwear",
    "Lab",
    "Education",
    "Services",
    "Furniture",
    "Fashion",
    "Pizza",
    "Novelties",
    "Bike",
  ];
  return (
    <Wrapper className='mt-[40px] mb-[64px]'>
    <div className="flex gap-5 rounded-2xl overflow-hidden bg-white">
      <img
        className=" aspect-auto object-cover object-center overflow-hidden"
        src={category}
        alt=""
      />
      <div className="flex flex-col py-4 gap-2 grow pr-4">
        <div >
          <span className="text-midnight-blue font-metropolis text-2xl font-semibold leading-normal">Popular Categories</span>
        </div>
        <div className="w-[76px] h-[3px] bg-red-700 rounded-md"></div>
        <div className="grid grid-cols-4">
          {categories.map((item, index) => (
            <div className="flex py-4 px-3 justify-center items-center grow border border-solid border-[#DFDFDF] ">
              <span className="text-midnight-blue text-center font-metropolis text-base  font-medium leading-normal">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    </Wrapper>
  );
}

export default Categories;
