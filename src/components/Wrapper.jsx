import React from 'react'

export default function Wrapper({children,className}) {
  return (
    <div className={`w-full max-w-[860px]  mx-auto ${className || ""}`}>
      {children}
    </div>
  )
}
