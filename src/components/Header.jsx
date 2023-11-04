import React from 'react'
import logo from '../assets/logo.png'
import Wrapper from './Wrapper'
import HeaderMenu from './HeaderMenu'
import search from '../assets/search.svg'

function Header() {
  return (<>
    <Wrapper>
    <div className="justify-between items-start flex gap-5 max-md:flex-wrap mt-6 max-md:justify-center">
    <img
      loading="lazy"
      src={logo}
      className="aspect-[2.4] object-contain object-center w-[120px] overflow-hidden self-stretch max-w-full"
    />
    <label className="items-start border bg-zinc-100 self-center flex w-[418px] max-w-full gap-2 my-auto pl-4  py-1 rounded-lg border-solid border-neutral-200 max-md:pr-5">
      <img
        loading="lazy"
        src={search}
        className="aspect-square object-contain object-center w-3 overflow-hidden self-stretch max-w-full"
      />
      <input className="w-full bg-transparent outline-none" placeholder='Search For brand, category, coupon'/>
    
    </label>
    <div className="text-white text-sm font-semibold uppercase self-center whitespace-nowrap justify-center items-center bg-red-600 w-[148px] max-w-full my-auto px-4 py-3 rounded-lg">
      Login / Sign Up
    </div>
  </div>
  </Wrapper>
  <HeaderMenu/>
  </>
  )
}

export default Header
