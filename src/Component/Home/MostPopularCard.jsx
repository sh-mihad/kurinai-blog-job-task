import React from 'react';

const MostPopularCard = ({blog}) => {
    
    return (
       <div className='border border-gray-300 pb-8 px-3 pt-3 hover:shadow-2xl '>
        <img src={blog?.image} className='mx-auto' alt="" />
       <div className='mt-4'>
       <p>{blog?.category}</p>
        <h1 className='text-xl'>{blog?.tille}</h1>
       </div>
       

       </div>
    );
};

export default MostPopularCard;