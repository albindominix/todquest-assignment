import React from 'react'
import AmazonCard from './AmazonCard'
import CouponCompoent from './CouponCompoent'
import AmazonCard2 from './AmazonCard2'
import fashion from '../assets/categories/fashion.png'
import food from '../assets/categories/food.png'
import beautycare from '../assets/categories/beautycare.png'
import toys from '../assets/categories/toys.png'
import hosting from '../assets/categories/hosting.png'
import gaming from '../assets/categories/gaming.png'
import mobile from '../assets/categories/mobile.png'
import travel from '../assets/categories/travel.png'
import movies from '../assets/categories/movies.png'
function Coupon() {

  const data = [
    {title:'Fashion' ,img:fashion},
    {title:'Food' ,img:food},
    {title:'Beauty' ,img:beautycare},
    {title:'Toys' ,img:toys},
    {title:'Cloud' ,img:hosting},
    {title:'Gaming' ,img:gaming},
    {title:'Phones' ,img:mobile},
    {title:'Travel' ,img:travel},
    {title:'Movies' ,img:movies},
  ]
  return (
    <div className="flex flex-col items-center gap-10 py-10 linear-gray-gradient">
    <div className="flex flex-col items-center gap-3">
      <h1 className="text-slate-900 text-2xl font-semibold">
      Coupon By Categories
      </h1>
      <div className="w-[76px] h-[3px] bg-red-700 rounded-md"></div>
    </div>
   
<div className='rounded-b-2xl overflow-hidden'>
<div className='flex gap-2 bg-transparent'>
{data.map((item,index)=>(
<CouponCompoent active={index == 0?true:false} title={item?.title} img={item.img}/>
))}
    </div>
    <div className="flex flex-wrap justify-between pt-4 bg-[#FFFFFF]">
      {[1, 2, 3, 4].map((item, index) => (
        <AmazonCard2 noBorder={true}/>
      ))}
    </div>
    <div className="pt-4 pb-6 bg-[#FFFFFF]">
      <div className="justify-center items-start flex gap-1.5">
        <span className="rounded bg-slate-900 self-stretch flex w-12 h-2 flex-col" />
        <span className="rounded bg-zinc-300 self-stretch flex w-5 h-2 flex-col" />
        <span className="rounded bg-zinc-300 self-stretch flex w-5 h-2 flex-col" />
      </div>
    </div>
    </div>
  </div>
  )
}

export default Coupon
