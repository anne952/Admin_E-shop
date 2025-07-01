"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import React, { use,useRef } from 'react'
import Layout from '../components/slideLayout'
import { PlusCircleIcon} from '@heroicons/react/24/outline'
import ProductsCard from '../components/cards-products'
import Link from 'next/link'


export default function products(){
   const router = useRouter();
      const [name, setName] = useState("");
      const [description, setDescription] = useState("");
      const [price, setPrice] = useState("");
  
      function handleSubmit(e: React.FormEvent) {
          e.preventDefault();
          const newProduct = {
              title: name,
              description,
              price: Number(price),
              image: "/compras.jpeg"
          };
          // Récupère les produits existants
          const products = JSON.parse(localStorage.getItem("products") || "[]");
          // Ajoute le nouveau produit
          products.push(newProduct);
          // Sauvegarde
          localStorage.setItem("products", JSON.stringify(products));
          // Redirige vers la page products
          router.push("/products");
      } 


       const dialogRef = useRef(null);

      const openForm = () => {
        dialogRef.current?.showModal();
      };

      const closeForm = () => {
        dialogRef.current?.close();
      };



  return (
  <Layout>
      <div className='flex justify-between items-center p-4'>
        <h1 className='font-bold text-2xl'>Les Products</h1>
        <button onClick={openForm} className='bg-blue-200 text-white hover:bg-blue-600 p-2 rounded-lg'>
                <PlusCircleIcon className='h-5 w-5' />
        </button>
        
      </div>
      <section>
        <div className="flex flex-wrap gap-4 mt-4">
          <ProductsCard
            title="Product 1"
            description="Description of product 1"
            price={250}
            image="/compras.jpeg"
            ></ProductsCard>

            <ProductsCard
            title="Product 2"
            description="Description of product 2"
            price={250}
            image="/compras.jpeg"
            ></ProductsCard>
        </div>
      </section>

      <dialog ref={dialogRef} className="mt-20 ml-150 bg-transparent">
          <div className="rounded shadow-gray-500 p-4 bg-transparent">
            <form className="bg-white p-6 rounded shadow-md w-full max-w-md" onSubmit={handleSubmit}>
                <h1 className="text-2xl font-bold mb-4">Add Products</h1>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded"
                        value={name} onChange={e => setName(e.target.value)} required />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea className="w-full px-3 py-2 border border-gray-300 rounded"
                        value={description} onChange={e => setDescription(e.target.value)} required />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
                    <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded"
                        value={price} onChange={e => setPrice(e.target.value)} required />
                </div>
                
                <button type="submit" onClick={closeForm} className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Add Product</button>
            </form>
        </div>
      </dialog>
  </Layout>
  )
}

