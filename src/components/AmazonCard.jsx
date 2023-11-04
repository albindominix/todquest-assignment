import * as React from "react";
import amazon from '../assets/amazon.png'
export default function AmazonCard({noBorder}) {
  return (
    <div className={`justify-center items-center  bg-white flex w-[200px] flex-col pl-6 pr-6 rounded-xl ${noBorder? '':'  border border-solid  border-gray-200'} max-md:px-5`}>
      <div className="items-center self-stretch flex flex-col mt-4 gap-5">
        <h2 className="text-lime-600 text-center text-base font-semibold leading-5 self-stretch">
          Upto 60% off on <br /> Appliances
        </h2>
        <img
          loading="lazy"
          src={amazon}
          alt="Appliances"
        />
        <p className="text-zinc-500 text-center text-xs font-medium leading-4 self-stretch ">
          Upto 60% off on summer Appliances
        </p>
      </div>
      <span
        className="text-white text-xs font-semibold uppercase self-stretch whitespace-nowrap justify-center items-center bg-red-600 w-full mt-10 mb-4 px-10 py-3 rounded-lg max-md:px-5"
      >
        Grab now
      </span>
    </div>
  );
}