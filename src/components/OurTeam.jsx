import React from "react";
import Wrapper from "./Wrapper";
import apple from "../assets/apple.png";
import play from "../assets/playstore.png";

export default function OurTeam(props) {
  return (
    <Wrapper className="py-10">
      <section className="flex flex-col pl-20 pr-20 rounded-3xl max-md:px-5  howitworks-gradient">
        <div className="items-start flex w-[352px] max-w-full flex-col my-24 self-start max-md:my-10">
          <div className="items-start self-stretch flex flex-col">
            <h1 className="self-stretch text-red-600 text-3xl font-semibold leading-10">
              Want to be a part of our team
            </h1>
            <p className="self-stretch text-neutral-700 text-base leading-6 mt-4">
              Be a part of the best site of discount coupons
            </p>
          </div>
          <div className="items-start self-stretch flex justify-between gap-4 mt-5">
            <a
              href="..."
              className="justify-between items-start border shadow-2xl bg-white flex gap-3 flex-1 px-5 py-3 rounded-lg border-solid border-gray-200"
            >
              <img
                loading="lazy"
                src={apple}
                className="aspect-square object-contain object-center w-8 overflow-hidden self-stretch max-w-full"
                alt="App Store"
              />
              <div className="justify-center items-start self-center flex flex-col my-auto">
                <div className="text-neutral-500 text-xs font-medium self-stretch whitespace-nowrap">
                  Download From
                </div>
                <div className="text-slate-900 text-sm font-semibold uppercase self-stretch whitespace-nowrap mt-1">
                  App Store
                </div>
              </div>
            </a>
            <a
              href="..."
              className="justify-between items-start border shadow-2xl bg-white flex gap-3 flex-1 px-5 py-3 rounded-lg border-solid border-gray-200"
            >
              <img
                loading="lazy"
                src={play}
                className="aspect-square object-contain object-center w-8 overflow-hidden self-stretch max-w-full"
                alt="Play Store"
              />
              <div className="justify-center items-start self-center flex flex-col my-auto">
                <div className="text-neutral-500 text-xs font-medium self-stretch whitespace-nowrap">
                  Download From
                </div>
                <div className="text-slate-900 text-sm font-semibold uppercase self-stretch whitespace-nowrap mt-1">
                  Play Store
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
