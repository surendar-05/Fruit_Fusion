import React from 'react';

const FruitCard = ({ fruit }) => {
    return (
        <div className='rounded-2xl overflow-hidden shadow-lg group relative'>
            <img 
                src={require(`../assests/${fruit.image}.jpeg`)} 
                alt={`${fruit.image}`}
                className='w-full h-52 object-cover transition-transform duration-100 transform hover:scale-200'
            />
            <div className='flex flex-col items-center my-1 space-y-1'>
                <span className='font-body text-slate-500 block'>{fruit.name}</span>
                <span className='font-body text-slate-500'>₹{fruit.price}</span>
                <span className='font-body uppercase text-lime-400 text-xs group-hover:visible invisible'>Add to cart</span>
            </div>
            <span className='absolute top-3 right-3 bg-green-500 text-white border-sky-300 p-1 rounded-lg text-sm'>{fruit.discount}% off</span>
        </div>
    );
}

export default FruitCard;
