import React from "react";
import AmazonCard2 from "./AmazonCard2";

function DealDay() {
  return (
    <div className="flex flex-col items-center gap-10 my-10">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-slate-900 text-2xl font-semibold">
          Deals Of The Day
        </h1>
        <div className="w-[76px] h-[3px] bg-red-700 rounded-md"></div>
      </div>

      <div className="flex flex-wrap gap-5 ">
        {[1, 2, 3, 4].map((item, index) => (
          <AmazonCard2 styles="border border-solid border-gray-200 rounded-2xl" />
        ))}
      </div>
      <div className="p-2.5 ">
        <div className="justify-center items-start flex gap-1.5">
          <span className="rounded bg-slate-900 self-stretch flex w-12 h-2 flex-col" />
          <span className="rounded bg-zinc-300 self-stretch flex w-5 h-2 flex-col" />
          <span className="rounded bg-zinc-300 self-stretch flex w-5 h-2 flex-col" />
        </div>
      </div>
    </div>
  );
}

export default DealDay;
