import React from 'react'
import Link from 'next/link'
import {UserIcon, Square2StackIcon, ShoppingCartIcon,FunnelIcon,ArrowLeftEndOnRectangleIcon,QuestionMarkCircleIcon} from '@heroicons/react/24/outline'



function sidenav() {


  return (
    
       <nav className="w-50 h-screen bg-blue-300 shadow-md">
      <div className=" m-4 p-4  flex flex-row">
        <div className="logo ">
          <h1 className='text-black font-bold text-lg' >Admin E-Shop</h1>
          <div className="border-white border mt-4"></div>

          <div className="flex flex-col mt-10 space-y-8">
            <Link href="/dashboard" className="flex gap-2 p-2 hover:bg-blue-600 rounded hover:text-white">
              <Square2StackIcon className="h-5 w-5 " /> Dashboard
            </Link>

            <Link href="/products" className="flex gap-2 p-2 hover:bg-blue-600 rounded hover:text-white">
              <ShoppingCartIcon className="h-5 w-5 " /> Products
            </Link>
            
             <Link href="/orders" className="flex gap-2 p-2 hover:bg-blue-600 rounded hover:text-white">
              <FunnelIcon className="h-5 w-5 " /> Orders
            </Link>
            
            <Link href="#" className="flex gap-2 p-2 hover:bg-blue-600 rounded hover:text-white">
              <QuestionMarkCircleIcon className="h-5 w-5 " /> Help
            </Link>

            
          
         
          </div>
      </div>
        </div> 

        <Link href="#" className="flex  ml-6 mt-60">
            <div className="rounded-full p-2 bg-blue-400 hover:bg-blue-600 text-white">
              <ArrowLeftEndOnRectangleIcon className="h-5 w-5 " />
            </div>
        </Link>
    </nav>
    
   
  )
}

export default sidenav