"use client";
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import ProductsCard from '../components/cards-products';
import {ShoppingCartIcon, HomeModernIcon ,PlusCircleIcon, CircleStackIcon, ComputerDesktopIcon,CreditCardIcon} from '@heroicons/react/24/outline';
import Footer from '../components/footer';

export default function Home() {

   const [products, setProducts] = useState<any[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
    const [showAddCard, setShowAddCard] = useState(false);
  
    // Charger les produits (exemple localStorage ou en dur)
    useEffect(() => {
      const stored = JSON.parse(localStorage.getItem("products") || "[]");
      setProducts(stored.length ? stored : [
        { title: "Product 1", description: "Description of product 1", price: 250, image: "/compras.jpeg" },
        { title: "Product 2", description: "Description of product 2", price: 250, image: "/compras.jpeg" }
      ]);
    }, []);
  
    // Handler pour ouvrir la card d'achat
    const handleAddToCard = (product: any) => {
      setSelectedProduct(product);
      setShowAddCard(true);
    };
  
    // Handler pour fermer la modale
    const closeAddCard = () => {
      setShowAddCard(false);
      setSelectedProduct(null);
    };



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
         <Link href="/choixConnexion" className='text-white bg-black p-3 rounded-2xl  hover:shadow-md hover:bg-blue-600 hover:rounded-2xl  hover:p-3'>Se connecter</Link>
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
        <HomeModernIcon className='h-10 w-10 p-2 bg-black text-white rounded-full mx-auto' />
        <h2 className='text-sm font-bold text-center'>Creer une boutique</h2>
       </Link>

       <Link href="#">
        <CircleStackIcon className='h-10 w-10 p-2 bg-black text-white rounded-full mx-auto' />
        <h2 className='text-sm font-bold text-center'>Gestion des boutique</h2>
       </Link>

       <Link href="#">
        <CreditCardIcon className='h-10 w-10 p-2 bg-black text-white rounded-full mx-auto' />
        <h2 className='text-sm font-bold text-center'>Payement et facturation</h2>
       </Link>


       <Link href="#">
        <ShoppingCartIcon className='h-10 w-10 p-2 bg-black text-white rounded-full mx-auto' />
        <h2 className='text-sm font-bold text-center'>Livraison et logistique</h2>
       </Link>

       <Link href="#">
        <ComputerDesktopIcon className='h-10 w-10 p-2 bg-black text-white rounded-full mx-auto' />
        <h2 className='text-sm font-bold text-center'>Marketing et fidelisation</h2>
       </Link>
       </div>
    </section>

    <section className='mt-15'>
        <div className="p-2">
            <h1 className='text-center text-2xl font-bold'>decouvrer quelques produits des boutiques existant</h1>
        </div>
          <section>
        <div className="flex flex-wrap gap-4 justify-center items-center p-4">                 
                   {products.map((prod, idx) => (
                     <ProductsCard
                       key={idx}
                       title={prod.title}
                       description={prod.description}
                       price={prod.price}
                       image={prod.image}
                       icon={<PlusCircleIcon className='h-6 w-6 text-blue-500' />}
                       onIconPress={() => handleAddToCard(prod)}
                     />
                   ))}
        </div>
       
               </section>
    </section>

     {showAddCard && selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-lg shadow-2xl p-8 min-w-[350px] relative">
            <button
              onClick={closeAddCard}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
            >×</button>
            <h1 className='font-bold text-2xl mb-4'>Card</h1>
            <div className="border mb-4"></div>
            <ul className='flex justify-between items-center mb-4'>
              <li>
                <img src={selectedProduct.image} alt="card" className='h-16 w-16 rounded-2xl' />
              </li>
              <li className='ml-4'>{selectedProduct.title}</li>
              <li className='ml-4'>{selectedProduct.price} $</li>
            </ul>
            <button className='p-2 bg-blue-400 rounded-2xl hover:bg-blue-600 text-white w-full mt-4'>Acheter</button>
          </div>
        </div>
      )}
    <div className="p-6 mb-4"></div>
    <Footer />
   </nav>
  )
}

