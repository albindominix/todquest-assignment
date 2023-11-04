import React from "react";
import Wrapper from "./Wrapper";
import AmazonCard2 from "./AmazonCard2";
import img1 from "../assets/1img.png";
import img2 from "../assets/2img.png";
import img3 from "../assets/3img.png";
import img4 from "../assets/4img.png";
function MemberShip() {
  return (
    <Wrapper>
      <div className="flex flex-col items-center gap-10 my-10">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-slate-900 text-2xl font-semibold">
            Popular Membership
          </h1>
          <div className="w-[76px] h-[3px] bg-red-700 rounded-md"></div>
        </div>

        <div className="grid grid-cols-2 md:grids-cols-1 gap-5 ">
          <div styles="aspect-[1.05] object-contain object-center w-full overflow-hidden flex-1 ">
            <img src={img1} alt="" />
          </div>

          <div
            styles="aspect-[1.05] object-contain object-center w-full overflow-hidden flex-1  "
            style={{
              background: `url(${img2}), lightgray -84px -74.034px / 140% 140% no-repeat`,
            }}
          >
            <div className="backdrop-blur-[2px] bg-white flex justify-center items-center bg-opacity-70 w-full h-full">
                <div className="grid grid-cols-2">
                  {[1, 2, 3, 4].map((item, index) => (
                    <AmazonCard2 />
                  ))}
                </div>
            </div>
          </div>

          <div styles="aspect-[1.05] object-contain object-center w-full overflow-hidden flex-1 ">
            <img src={img3} alt="" />
          </div>

          <div styles="aspect-[1.05] object-contain object-center w-full overflow-hidden flex-1 ">
            <img src={img4} alt="" />
          </div>
        </div>
        <div className="p-2.5 ">
          <div className="justify-center items-start flex gap-1.5">
            <span className="rounded bg-slate-900 self-stretch flex w-12 h-2 flex-col" />
            <span className="rounded bg-zinc-300 self-stretch flex w-5 h-2 flex-col" />
            <span className="rounded bg-zinc-300 self-stretch flex w-5 h-2 flex-col" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default MemberShip;
