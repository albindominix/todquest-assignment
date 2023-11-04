import * as React from "react";
import amazon from '../assets/amazon.png'
export default function AmazonCard2({ noBorder, styles = "" }) {
  return (
    <article
      className={`items-center bg-white flex w-[200px] flex-col px-7  ${
        noBorder ? "" : " border-b-gray-200 border-b border-solid"
      } ${styles} max-md:px-5`}
    >
      <section className="items-center self-center flex w-20 max-w-full flex-col mt-5">
        <img
          loading="lazy"
          src={amazon}
          className="aspect-[3.33] object-contain object-center w-full overflow-hidden self-stretch"
          alt="Product Image"
        />
        <div className="text-slate-900 text-center text-xs font-medium leading-4 self-center whitespace-nowrap mt-3">
          Amazon
        </div>
      </section>
      <section className="items-center self-stretch flex flex-col w-full mt-6 mb-5">
        <div className="text-lime-600 text-center text-xs font-semibold self-center whitespace-nowrap">
          Flat 30% Off
        </div>
        <a
          href="..."
          className="text-white text-xs font-semibold uppercase self-stretch whitespace-nowrap justify-center items-center bg-red-600 w-full grow mt-2 px-10 py-3 rounded-lg max-md:px-5"
        >
          Grab Now
        </a>
      </section>
    </article>
  );
}
