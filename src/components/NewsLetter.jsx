import * as React from "react";
import lady from "../assets/form-img.png";
export default function Newsletter(props) {
  return (
    <section className="justify-center items-center flex flex-col px-20 max-md:px-5 linear-gray-gradient">
      <article className="bg-white self-center w-[880px] max-w-full mt-8 mb-11 p-2.5 rounded-xl border-[10px] border-solid border-white max-md:mb-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              src={lady}
              className="aspect-[1.05] object-contain object-center w-full overflow-hidden flex-1 max-md:mt-8"
              alt="Newsletter Image"
            />
          </div>
          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="items-start flex flex-col my-auto max-md:mt-10">
              <div className="items-start self-stretch flex flex-col">
                <h2 className="text-slate-900 text-3xl font-semibold leading-10 self-stretch">
                  Subscribe to our <br /> Newsletter!
                </h2>
                <p className="text-neutral-400 text-base leading-6 self-stretch mt-4">
                  Be the first to get exclusive offers <br /> and the latest
                  news
                </p>
              </div>
              <div className="items-start self-stretch flex grow flex-col mt-6">
                <label htmlFor="email" className="sr-only">
                  Enter your email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="text-neutral-400 text-xs whitespace-nowrap items-start border bg-white w-[420px] max-w-full pl-5 pr-20 py-4 rounded-lg border-solid border-neutral-300 self-start max-md:pr-5"
                  placeholder="Enter your email address"
                />
                <button className="text-white text-xs font-semibold uppercase whitespace-nowrap justify-center items-center bg-red-600 w-[148px] max-w-full grow mt-4 px-10 py-3 rounded-lg self-start max-md:px-5">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
