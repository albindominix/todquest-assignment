import * as React from "react";

export default function HeaderMenu(props) {
  return (
    <div className="justify-center items-center bg-slate-900 flex flex-col px-20 mt-6 max-md:px-5">
      <div className="items-start self-center flex  max-w-full justify-between gap-4 max-md:justify-center">
        <div className="text-red-600 text-xs font-semibold self-stretch whitespace-nowrap justify-center items-center p-4 border-b-2 border-b-red-600 border-solid">
          Home
        </div>
        <div className="justify-center items-start self-center flex gap-1 my-auto">
          <div className="text-white text-xs font-semibold self-stretch">
            Deals
          </div>
         
        </div>
        <div className="justify-center items-start self-center flex gap-1 my-auto">
          <div className="text-white text-xs font-semibold self-stretch">
            Coupon
          </div>

        </div>
        <div className="justify-center items-start self-center flex gap-1 my-auto">
          <div className="text-white text-xs font-semibold self-stretch">
            Stores
          </div>

        </div>
        <div className="text-white text-xs font-semibold self-center whitespace-nowrap my-auto">
          Contact us
        </div>
      </div>
    </div>
  );
}


