import React from 'react';
import MostPopularCard from './MostPopularCard';

const MostPopuler = ({blogs}) => {
    // console.log(blogs.slice(0,4));
    return (
        <div className='bg-base-300 py-16 px-3 lg:px-24 mb-28'>
            <div>
                <h1 className='text-3xl text-center'>Most Popular</h1>
                <div className="divider w-20  mx-auto"></div>
            </div>
            <div className='mx-auto my-10  grid grid-cols-1 lg:grid-cols-4 gap-5'>
              {
                blogs?.slice(0,4)?.map(blog=><MostPopularCard
                blog={blog}
                >

                </MostPopularCard>)
              }
            </div>
        </div>
    );
};

export default MostPopuler;