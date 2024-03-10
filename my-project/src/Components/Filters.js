import React from 'react';
import { useState } from 'react';

const Filters = () => {
    const [selectedItem, setSelectedItem] = useState(1);

    return (
        <section className='my-10 py-3 w-full  md:w-4/6 mx-auto flex flex-col md:flex-row justify-center md:space-x-4'>
            <button onClick={() => setSelectedItem(1)} className={`btnStyle ${selectedItem === 1 ? 'bg-blue-400 text-white' : 'text-slate-500'} py-2 px-4`}>Latest</button>
            <button onClick={() => setSelectedItem(2)} className={`btnStyle ${selectedItem === 2 ? 'bg-blue-400 text-white' : 'text-slate-500'} py-2 px-4`}>Best Seller</button>
            <button onClick={() => setSelectedItem(3)} className={`btnStyle ${selectedItem === 3 ? 'bg-blue-400 text-white' : 'text-slate-500'} py-2 px-4`}>Special</button>
        </section>
    );
}

export default Filters;
