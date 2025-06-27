import React from 'react';


interface ProductProps{
    title: string;
    description: string;
    price: number;
    image?: string;
    icon?: React.ReactNode;
    onIconPress?: () => void;
    children?: React.ReactNode;
}


export default function ProductsCard({title,children, description, price, image, icon, onIconPress}: ProductProps){

    return(
       <div className="card text-black p-6 rounded-lg shadow-md w-60">
          <div className=" flex justify-between items-center mb-4">
            <h2 className='text-xl'>{title}</h2>
            {icon && (
                    <span 
                    onClick={onIconPress} 
                    className='h-6 w-6 text-blue-500 cursor-pointer'>
                        {icon}
                    </span>
                )}
          </div> 
           
          {image && (
            <img 
            src={image} 
            alt={title}
            className='w-full h-40 object-cover  mb-4' />
          )}         
            <p className='text-sm'>{description}</p>
            <p className='text-lg font-bold'>{price} $</p>

            {children}
          </div>
            
        
    )
}