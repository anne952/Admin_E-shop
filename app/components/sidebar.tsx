import React from 'react'
import Link from 'next/link'
import {UserIcon, Square2StackIcon, ShoppingCartIcon,FunnelIcon,ArrowDownIcon ,QuestionMarkCircleIcon} from '@heroicons/react/24/outline'



function sidenav() {


  return (
    
       <nav className="w-50 h-screen bg-gray-300 shadow-md">
      <div className=" m-4 p-4  flex flex-row">
        <div className="logo ">
          <h1 className='text-black font-bold text-lg' >Admin E-Shop</h1>
          <div className="border-white border mt-4"></div>

          <div className="flex flex-col mt-10 space-y-2 ">
            <div className="flex gap-2 hover:bg-blue-600 rounded hover:text-white">
              <Square2StackIcon className="h-5 w-5 mt-2" />
               <Link href='/' className="p-2 ">Dashboard</Link>
            </div>
            <div className="flex gap-2 hover:bg-blue-600 rounded hover:text-white">
              <ShoppingCartIcon className="h-5 w-5 mt-2" />
              <Link href='/products' className="p-2">Products</Link>
            </div>
            <div className="flex gap-2  hover:bg-blue-600 rounded hover:text-white">
              <FunnelIcon className="h-5 w-5 mt-2" />
              <Link href='/categories' className="p-2">Orders</Link>
            </div>

          <div className=" flex gap-2 hover:bg-blue-600 rounded hover:text-white">
          <QuestionMarkCircleIcon className="h-5 w-5 mt-2" />
          <Link href="#" className="  p-2 ">Help</Link>
          </div>
          <div className="flex gap-2 hover:bg-blue-600 rounded hover:text-white">
          <ArrowDownIcon className="h-5 w-5 mt-2" />
          <Link href="#" className="  p-2 ">Setting</Link>
          </div>
          </div>
      </div>
        </div> 

        <div className=" flex mt-70 py-2 w-50 items-center gap-2 hover:bg-blue-600 p-2 rounded hover:text-white">
          <UserIcon className="h-5 w-5 mt-1" />
          <h2 className=" text-center mt-2">Admin Name</h2>
        </div>
    </nav>
    
   
  )
}

export default sidenav