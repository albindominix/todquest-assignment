import React from "react";
import Wrapper from "./Wrapper";
import arrow from "../assets/arrow.svg";
import logo from "../assets/logo.png";
import playstore from "../assets/playstore.png";
import apple from "../assets/apple.png";
function Footer() {
  const company = [
    "About us",
    "Privacy Policy",
    "Terms",
    "Blogs",
    "Branding",
    "Career",
  ];
  const general = ["Partner With us", "Write to us", "Mobile App", "Site Map"];
  const pages = [
    "Amazon Offer",
    "Google Pay Offers",
    "Paypal Offers",
    "PhonePe Offers",
    "Festival Offers",
    "Bank Offers",
  ];
  const more = ["City Offers", "Brand Offers", "Product Deals", "Gift Cards"];
  return (
    <div className="py-9 bg-[#091431]">
      <Wrapper className="flex gap-5">
        <div className=" flex w-[200px]  flex-col">
          <img
            loading="lazy"
            src={logo}
            className="aspect-[4] object-contain  w-full overflow-hidden text-left "
            alt="Image"
          />
          <p className="text-white text-xs leading-4 self-stretch mt-3.5">
            Lorem Ipsum is simply dummy of the printing and type setting.
          </p>
          <div className="items-start self-stretch flex grow flex-col w-full mt-3.5">
            <div className="justify-between items-start border shadow-2xl bg-white self-stretch flex w-full gap-1 pl-4 pr-20 py-2 rounded-lg border-solid border-gray-200 max-md:pr-5">
              <img
                loading="lazy"
                src={apple}
                className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch max-w-full"
                alt="Image"
              />
              <div className="justify-center items-start self-stretch flex flex-col">
                <p className="text-neutral-500 text-xs font-medium self-stretch whitespace-nowrap">
                  Download From
                </p>
                <p className="text-slate-900 text-xs font-semibold uppercase self-stretch whitespace-nowrap">
                  App Store
                </p>
              </div>
            </div>
            <div className="justify-between items-start border shadow-2xl bg-white self-stretch flex w-full gap-1 mt-2 pl-3 pr-20 py-2 rounded-lg border-solid border-gray-200 max-md:pr-5">
              <img
                loading="lazy"
                src={playstore}
                className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch max-w-full"
                alt="Image"
              />
              <div className="justify-center items-start self-stretch flex flex-col">
                <p className="text-neutral-500 text-xs font-medium self-stretch whitespace-nowrap">
                  Download From
                </p>
                <p className="text-slate-900 text-xs font-semibold uppercase self-stretch whitespace-nowrap">
                  Play Store
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full">
          <div className="flex flex-col gap-4 pt-4 grow">
            <div className="text-red-500 font-metropolis text-xs font-semibold tracking-normal uppercase">
              Company
            </div>
            <div className="self-stretch flex  flex-col gap-3">
              {company.map((item, index) => (
                <div className=" flex justify-start  gap-0.5 ">
                  <img
                    loading="lazy"
                    src={arrow}
                    className="aspect-square object-contain object-center w-2.5 overflow-hidden self-stretch max-w-full"
                    alt="About Us"
                  />
                  <a
                    href="#"
                    className="text-white text-xs font-medium self-stretch whitespace-nowrap"
                  >
                    {item}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 pt-4 grow">
            <div className="text-red-500 font-metropolis text-xs font-semibold tracking-normal uppercase">
              General
            </div>
            <div className="self-stretch flex  flex-col gap-3">
              {general.map((item, index) => (
                <div className="items-start  flex justify-start  gap-0.5 ">
                  <img
                    loading="lazy"
                    src={arrow}
                    className="aspect-square object-contain object-center w-2.5 overflow-hidden self-stretch max-w-full"
                    alt="About Us"
                  />
                  <a
                    href="#"
                    className="text-white text-xs font-medium self-stretch whitespace-nowrap"
                  >
                    {item}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 pt-4 grow">
            <div className="text-red-500 font-metropolis text-xs font-semibold tracking-normal uppercase">
              Pages
            </div>
            <div className="self-stretch flex  flex-col gap-3">
              {pages.map((item, index) => (
                <div className="items-start  flex justify-start  gap-0.5 ">
                  <img
                    loading="lazy"
                    src={arrow}
                    className="aspect-square object-contain object-center w-2.5 overflow-hidden self-stretch max-w-full"
                    alt="About Us"
                  />
                  <a
                    href="#"
                    className="text-white text-xs font-medium self-stretch whitespace-nowrap"
                  >
                    {item}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 pt-4 grow">
            <div className="text-red-500 font-metropolis text-xs font-semibold tracking-normal uppercase">
              Company
            </div>
            <div className="self-stretch flex  flex-col gap-3">
              {more.map((item, index) => (
                <div className="items-start  flex justify-start  gap-0.5 ">
                  <img
                    loading="lazy"
                    src={arrow}
                    className="aspect-square object-contain object-center w-2.5 overflow-hidden self-stretch max-w-full"
                    alt="About Us"
                  />
                  <a
                    href="#"
                    className="text-white text-xs font-medium self-stretch whitespace-nowrap"
                  >
                    {item}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Footer;
