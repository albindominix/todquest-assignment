import React from 'react'
import image from '../assets/imagebanner.png'
import Wrapper from './Wrapper'
function ImageBanner() {
  return (
    <Wrapper>
    <div className='py-4'>
      <img src={image} className="aspect-[4.06] object-contain object-center w-full overflow-hidden" alt="" />
    </div>
    </Wrapper>
  )
}

export default ImageBanner
