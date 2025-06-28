import React, { use } from 'react'
import Layout from '../components/slideLayout'
import { PlusCircleIcon} from '@heroicons/react/24/outline'
import ProductsCard from '../components/cards-products'
import Link from 'next/link'


export default function products(){
   
  return (
  <Layout>
      <div className='flex justify-between items-center p-4'>
        <h1 className='font-bold text-2xl'>Les Products</h1>
        <Link href="/addProducts" className='bg-blue-200 text-white hover:bg-blue-600 p-2 rounded-lg'>
                <PlusCircleIcon className='h-5 w-5' />
        </Link>
        
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
  </Layout>
  )
}

