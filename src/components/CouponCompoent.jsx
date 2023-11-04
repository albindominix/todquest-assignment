import React from "react";

function CouponCompoent({ active,title='',img='' }) {

  console.log(active);
  return (
    <div
      className={`items-center bg-white flex flex-col p-4 rounded-t-lg border-b-2 ${
        active ? " border-b-red-600 " : "border-b-transparent"
      } border-solid`}
    >
      <img
        loading="lazy"
        src={img}
        className="aspect-square object-contain object-center w-9 overflow-hidden self-center max-w-full mx-3"
      />
      <h2 className="text-slate-900 text-center text-xs font-semibold self-stretch mt-2.5 ">
{title}      </h2>
    </div>
  );
}

export default CouponCompoent;
