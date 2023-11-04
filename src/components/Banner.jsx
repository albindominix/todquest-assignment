import React from 'react'
import banner from '../assets/image.png'
import Wrapper from './Wrapper'
export default function Banner() {
  return (
    <Wrapper className='py-10'>
      <img src={banner} alt="" />
      <div className='p-2.5'>
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

