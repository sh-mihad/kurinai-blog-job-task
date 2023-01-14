import React from 'react';
import MostPopularCard from './MostPopularCard';

const MostPopuler = () => {
    return (
        <div className='bg-base-300 py-16'>
            <div>
                <h1 className='text-3xl text-center'>Most Popular</h1>
                <div className="divider w-20  mx-auto"></div>
            </div>
            <div className='mx-auto grid grid-cols-1 lg:grid-cols-4'>
               <MostPopularCard/> 
               <MostPopularCard/> 
               <MostPopularCard/> 
               <MostPopularCard/> 
            </div>
        </div>
    );
};

export default MostPopuler;