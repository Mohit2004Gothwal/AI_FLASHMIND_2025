"use client"
import { SignIn,SignedIn } from '@clerk/nextjs'
import React from 'react'
import SideNav from './_components/SideNav'
function DashBoardlayout({children}) {
  return (
    <SignedIn>
    <div className="bg-gray-100"> {/* Added background class */}

      <div className='md:w-64 fixed'>
          <SideNav/>
      </div>
      <div className='md:ml-64'>
      {children}
      </div>
      
       
        
   </div>
   </SignedIn>
  )
}

export default DashBoardlayout
