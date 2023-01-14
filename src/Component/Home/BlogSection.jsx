import React from 'react';
import image1 from "../../assests/Banner-Images/women.jpg"
import image2 from "../../assests/Banner-Images/sport.jpg"

const BlogSection = ({blog}) => {
    
    // const{} = blogs;
    console.log(blog);
    return (
        <div className='my-2'>
            <div className='border p-3'>
                <img src={blog?.image} className='' alt="" />
                <div className='my-10 px-10 mx-auto'>
                    <small>{blog?.category}</small>
                    <h1 className='text-3xl text-center'>{blog?.tille}</h1>
                    <div className="divider w-20  mx-auto"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec eleifend risus. Vestibulum vel lacinia enim. Quisque vel convallis velit, vitae rutrum neque. Nunc accumsan sem sit amet finibus...</p>
                    <button className='btn btn-outline my-7'>Read more</button>
                </div>
            </div>
        </div>
    );
};

export default BlogSection;