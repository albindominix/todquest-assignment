import React from 'react'
import AmazonCard from './AmazonCard';
import Wrapper from './Wrapper';
import trophy from '../assets/Trophy.svg';
import timer from '../assets/Timer.svg';
import hot from '../assets/Hot.svg';

function Options() {
  return (
    <Wrapper className='my-10 block'>
        <div className='flex justify-center '>
        <div className=" self-center flex w-[400px] max-w-full justify-between gap-3 pr-3 my-10 max-md:justify-center">
      <div className="justify-between items-start shadow-2xl bg-white self-stretch flex w-[142px] max-w-full gap-1.5 p-3 rounded-lg">
        <img
          loading="lazy"
          src={trophy}
          className="aspect-square object-contain object-center w-3 overflow-hidden self-stretch max-w-full"
          alt="Coupon Image"
        />
        <div className="text-red-600 text-xs font-medium self-stretch whitespace-nowrap">
          Popular Coupons
        </div>
      </div>
      <div className="justify-center items-start self-center flex gap-2.5 my-auto rounded-lg">
        <img
          loading="lazy"
          src={timer}
          className="aspect-square object-contain object-center w-3 overflow-hidden self-stretch max-w-full"
          alt="Coupon Image"
        />
        <div className="text-slate-900 text-xs font-medium self-stretch whitespace-nowrap">
          Ending Soon
        </div>
      </div>
      <div className="justify-center items-start self-center flex gap-3 my-auto rounded-lg">
        <img
          loading="lazy"
          src={hot}

          className="aspect-square object-contain object-center w-3 overflow-hidden self-stretch max-w-full"
          alt="Coupon Image"
        />
        <div className="text-slate-900 text-xs font-medium self-stretch whitespace-nowrap">
          Latest Coupons
        </div>
      </div>
    </div>
        </div>
      
<div className='flex flex-wrap gap-4'>
{[1,2,3,4,5,6,7,8].map((item,index)=>(
    <AmazonCard/>
  ))}
</div>
 
 <div className='p-2.5 mt-10'>
      <div className="justify-center items-start flex gap-1.5">
      <span
        className="rounded bg-slate-900 self-stretch flex w-12 h-2 flex-col"
      />
      <span
        className="rounded bg-zinc-300 self-stretch flex w-5 h-2 flex-col"
      />
      <span
        className="rounded bg-zinc-300 self-stretch flex w-5 h-2 flex-col"
      />
    </div>
      </div>
    </Wrapper>
  )
}

export default Options

