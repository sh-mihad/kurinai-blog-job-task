import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { UserAuth } from '../../ContexAPI/AuthProvider';

const AddBlog = () => {
    const {user}= useContext(UserAuth)
    const {register,handleSubmit,formState: { errors },reset} = useForm()
    console.log(user);

    const submitedLoginForm =data=>{
        const email = user?.email
        const tille = data.title;
        const category = data.category
        const authorName = data.name
        const details = data.details;
        
        const formData = new FormData();
        formData.append('image', data.photo[0]);

        fetch('https://api.imgbb.com/1/upload?key=2fbe1796a4bf3cd52ba5028ba7992a29', {
            method: 'POST',
            body: formData
        }).then(res=>res.json())
        .then(data=>{
            if(data.success && user){
                const image = data.data.display_url; 
                const blog ={
                    tille,
                    category,
                    authorName,
                    details,
                    image,
                    email
                }

            fetch("http://localhost:5000/blog",{
                method:"POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(blog)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
               if(data.acknowledged){
                toast.success("Successfully Added")
               }
            })

                
            }
        })
    }
    return (
        <div className="w-full my-16">
        <div className=" w-full ">
            <div className="card w-9/12 mx-auto shadow-2xl bg-base-100">
                <h1 className="text-2xl mt-5 text-center font-bold">Add Your Article</h1>
                <form onSubmit={handleSubmit(submitedLoginForm)} className="card-body mb-0 ">
                   <div className=''>
                   <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input type="text" placeholder="Title" className="input input-bordered"
                            {...register("title", {
                                required: "Invalid  Fild",

                            })}
                        />
                        {errors.title && <p className='text-sm mt-2 text-red-700'>{errors.title.message}</p>}
                    </div>
                   <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" placeholder="Add Category" className="input input-bordered"
                            {...register("category", {
                                required: "Invalid  Fild",

                            })}
                        />
                        {errors.category && <p className='text-sm mt-2 text-red-700'>{errors.category.message}</p>}
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text mt-3">Upload Photo</span>
                        </label>
                        <input type="file" className='file-input file-input-bordered w-full' 
                         {...register("photo", {
                            required: "Upload your photo"
                        })} />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Author Name</span>
                        </label>
                        <input type="text" placeholder="Author Name" className="input input-bordered"
                            {...register("name", {
                                required: "Invalid Password Fild"
                            })}
                            defaultValue={user?.displayName}
                            readOnly

                        />
                        {errors.location && <p className='text-sm mt-2 text-red-700'>{errors.location.message}</p>}

                    </div>
                   </div>
                   <div className="form-control ">
                   <label className="label">
                            <span className="label-text">Wrirte article</span>
                        </label>
                    <textarea className="textarea  w-full input-bordered" placeholder="About Something for your prduct" 
                    {...register("details",{
                        required:"Invalid Fild"
                    })}
                    
                    ></textarea>
                        {errors.details && <p className='text-sm mt-2 text-red-700'>{errors.details.message}</p>}
                    </div>

                    <div className="form-control mt-6">
                        <input type="submit" className="btn btn-primary w-full" value="Add Blog" />
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default AddBlog;