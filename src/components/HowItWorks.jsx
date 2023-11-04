import React from "react";
import Wrapper from "./Wrapper";
import login from '../assets/Login.svg'
import Coupon from '../assets/Coupon.svg'
import Card from '../assets/Card.svg'
export default function HowItWorks(props) {
  return (
    <Wrapper className="py-10">
      <section className="items-center flex flex-col">
        <div className="justify-center items-center self-center flex w-[169px] max-w-full flex-col px-5">
          <h2 className="text-slate-900 text-2xl font-semibold self-stretch whitespace-nowrap -mr-5">
            How It Works?
          </h2>
          <div className="bg-red-600 self-center flex w-[76px] h-[3px] flex-col mt-2.5" />
        </div>
        <div className="self-stretch mt-10 px-5 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
              <div className="items-center border bg-white flex w-full max-w-[273px] grow flex-col mx-auto px-4 py-6 rounded-2xl border-solid border-gray-200 max-md:mt-5">
                <div className="justify-center items-center self-center flex w-14 max-w-full flex-col p-4 rounded-xl howitworks-gradient">
                  <img
                    loading="lazy"
                    src={login}
                    className="aspect-square object-contain object-center w-full overflow-hidden self-stretch"
                    alt="Image 1"
                  />
                </div>
                <div className="items-center self-stretch flex flex-col mt-6">
                  <h3 className="self-stretch text-slate-900 text-center text-base font-semibold leading-7">
                    Signup
                  </h3>
                  <p className="self-stretch text-zinc-700 text-center text-sm font-medium leading-6 mt-2">
                    If you are going to use a passage of Lorem Ipsum, you need
                    to be sure there
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-center border bg-white flex w-full max-w-[274px] grow flex-col mx-auto px-4 py-6 rounded-2xl border-solid border-gray-200 max-md:mt-5">
                <div className="justify-center items-center self-center flex w-14 max-w-full flex-col p-4 rounded-xl  howitworks-gradient">
                  <img
                    loading="lazy"
                    src={Coupon}
                    className="aspect-square object-contain object-center w-full overflow-hidden self-stretch"
                    alt="Image 2"
                  />
                </div>
                <div className="items-center self-stretch flex flex-col mt-6">
                  <h3 className="self-stretch text-slate-900 text-center text-base font-semibold leading-7">
                    Choose Coupon
                  </h3>
                  <p className="self-stretch text-zinc-700 text-center text-sm font-medium leading-6 mt-2">
                    If you are going to use a passage of Lorem Ipsum, you need
                    to be sure there
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-center border bg-white flex w-full max-w-[273px] grow flex-col mx-auto px-4 py-6 rounded-2xl border-solid border-gray-200 max-md:mt-5">
                <div className="justify-center items-center self-center flex w-14 max-w-full flex-col p-4 rounded-xl  howitworks-gradient">
                  <img
                    loading="lazy"
                    src={Card}
                    className="aspect-square object-contain object-center w-full overflow-hidden self-stretch"
                    alt="Image 3"
                  />
                </div>
                <div className="items-center self-stretch flex flex-col mt-6">
                  <h3 className="self-stretch text-slate-900 text-center text-base font-semibold leading-7">
                    Grab Coupon
                  </h3>
                  <p className="self-stretch text-zinc-700 text-center text-sm font-medium leading-6 mt-2">
                    If you are going to use a passage of Lorem Ipsum, you need
                    to be sure there
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
