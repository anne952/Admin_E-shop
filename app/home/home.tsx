import React from 'react'
import Link from 'next/link';
import ProductsCard from '../components/cards-products';
import {ShoppingCartIcon, PlusCircleIcon} from '@heroicons/react/24/outline';

const home = () => {
  return (
   <nav>
     <div className="headeLine flex justify-between items-center bg-transparent  p-4 ">
        <div className=" m-2 bg-gradient-to-b from-blue-100 to-black text-transparent bg-clip-text">SHAVA</div>
        <div className=" space-x-4 flex">
        <Link href="#" className=' p-3  hover:shadow-md hover:bg-blue-600 hover:rounded-2xl  hover:p-3'>Accueil</Link>
        <Link href="#" className=' p-3  hover:shadow-md hover:bg-blue-600 hover:rounded-2xl  hover:p-3'>Categories</Link>
        <Link href="#" className=' p-3 hover:shadow-md hover:bg-blue-600 hover:rounded-2xl  hover:p-3'>Produits</Link>
        <Link href="#" className=' p-3 hover:shadow-md hover:bg-blue-600 hover:rounded-2xl  hover:p-3'>Footer</Link>
        </div>
        <div className="">
         <Link href="/dashboard" className='text-white bg-black p-3 rounded-2xl  hover:shadow-md hover:bg-blue-600 hover:rounded-2xl  hover:p-3'>Se connecter</Link>
        </div>
    </div>

    <div className="image">
        <img 
        src="/03.jpeg" 
        alt="lo" 
        className='w-full max-h-150  object-cover bg-center bg-cover bg-no-repeat  shadow-md'
        />
    </div>
    

    <div className="-mt-80">
        <h1 className='text-4xl font-bold text-center'>Bienvenue sur notre site</h1>
        <p className='text-center '>Découvrez nos produits et services de qualité</p>
    </div>

    <section className='mt-80'>    
       <div className=" flex flex-wrap gap-8 justify-center items-center p-4">
      <Link href="#">
        <ShoppingCartIcon className='h-10 w-10 p-2 bg-black text-white rounded-full mx-auto' />
        <h2 className='text-sm font-bold text-center'>Creer une boutique</h2>
       </Link>

       <Link href="#">
        <ShoppingCartIcon className='h-10 w-10 p-2 bg-black text-white rounded-full mx-auto' />
        <h2 className='text-sm font-bold text-center'>Gestion des boutique</h2>
       </Link>

       <Link href="#">
        <ShoppingCartIcon className='h-10 w-10 p-2 bg-black text-white rounded-full mx-auto' />
        <h2 className='text-sm font-bold text-center'>Payement et facturation</h2>
       </Link>


       <Link href="#">
        <ShoppingCartIcon className='h-10 w-10 p-2 bg-black text-white rounded-full mx-auto' />
        <h2 className='text-sm font-bold text-center'>Livraison et logistique</h2>
       </Link>

       <Link href="#">
        <ShoppingCartIcon className='h-10 w-10 p-2 bg-black text-white rounded-full mx-auto' />
        <h2 className='text-sm font-bold text-center'>Marketing et fidelisation</h2>
       </Link>
       </div>
    </section>

    <section className='mt-15'>
        <div className="p-2">
            <h1 className='text-center text-2xl font-bold'>decouvrer quelques produits des boutiques existant</h1>
        </div>
        <div className="flex flex-wrap gap-4 justify-center items-center p-4">
          <ProductsCard
            title="Product 1"
            description="Description of product 1"
            price={250}
            image="/compras.jpeg"
            icon={<PlusCircleIcon className='h-6 w-6 text-blue-500' />}
          />
          <ProductsCard
            title="Product 2"
            description="Description of product 2"
            price={250}
            image="/compras.jpeg"
            icon={<PlusCircleIcon className='h-6 w-6 text-blue-500' />}
          />
          <ProductsCard
            title="Product 3"
            description="Description of product 3"
            price={250}
            image="/compras.jpeg"
            icon={<PlusCircleIcon className='h-6 w-6 text-blue-500' />}
          />
            <ProductsCard
                title="Product 4"
                description="Description of product 4"
                price={250}
                image="/compras.jpeg"
                icon={<PlusCircleIcon className='h-6 w-6 text-blue-500' />}
            />
            <ProductsCard   
                title="Product 5"
                description="Description of product 5"
                price={250}
                image="/compras.jpeg"
                icon={<PlusCircleIcon className='h-6 w-6 text-blue-500' />}
            />
             <ProductsCard
            title="Product 1"
            description="Description of product 1"
            price={250}
            image="/compras.jpeg"
            icon={<PlusCircleIcon className='h-6 w-6 text-blue-500' />}
          />
          <ProductsCard
            title="Product 2"
            description="Description of product 2"
            price={250}
            image="/compras.jpeg"
            icon={<PlusCircleIcon className='h-6 w-6 text-blue-500' />}
          />
          <ProductsCard
            title="Product 3"
            description="Description of product 3"
            price={250}
            image="/compras.jpeg"
            icon={<PlusCircleIcon className='h-6 w-6 text-blue-500' />}
          />
            <ProductsCard
                title="Product 4"
                description="Description of product 4"
                price={250}
                image="/compras.jpeg"
                icon={<PlusCircleIcon className='h-6 w-6 text-blue-500' />}
            />
            <ProductsCard   
                title="Product 5"
                description="Description of product 5"
                price={250}
                image="/compras.jpeg"
                icon={<PlusCircleIcon className='h-6 w-6 text-blue-500' />}
            />
        </div>
    </section>
   </nav>
  )
}

export default home