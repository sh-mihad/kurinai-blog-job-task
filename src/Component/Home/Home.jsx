import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Header from '../Header/Header';
import BlogSection from './BlogSection';
import MostPopuler from './MostPopuler';


const Home = () => {

 
  const { data:blogs,isLoading,refetch} =useQuery({
        queryKey : ["blogs"],
        queryFn : async ()=>{
            const res = await fetch("https://kurenai-server.vercel.app/blogs")
            const data = await res.json()
            return data;
        }
  })

//   console.log(blogs);

    return (
        <div>
         <Header/>
         <MostPopuler blogs={blogs}/>
         <div className='grid grid-cols-1  lg:grid-cols-2  gap-8  mx-3 lg:mx-28'>
         {
            blogs?.map(blog=><BlogSection 
            blog={blog}
            ></BlogSection>)
         }
         </div>
        </div>
    );
};

export default Home;