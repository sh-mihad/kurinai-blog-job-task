import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const submitedLoginForm = (data) => {
        console.log(data)
    }

    const handleGoolgeLogin = () => {
        console.log("handle Google login clicked");
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content w-full">
            <div className="card w-full md:w-2/6 shadow-2xl bg-base-100">
                <h1 className="text-2xl mt-5 text-center font-bold">SignUp now!</h1>
                <form onSubmit={handleSubmit(submitedLoginForm)} className="card-body mb-0">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" className="input input-bordered"
                            {...register("name", {
                                required: "Invalid Fild Emial Fild",

                            })}
                        />
                        {errors.name && <p className='text-sm mt-2 text-red-700'>{errors.name.message}</p>}
                    </div>
                   
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered"
                            {...register("email", {
                                required: "Invalid Fild Emial Fild",

                            })}
                        />
                        {errors.email && <p className='text-sm mt-2 text-red-700'>{errors.email.message}</p>}
                    </div>
                   
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered"
                            {...register("password", {
                                required: "Invalid Password Fild"
                            })}

                        />
                        {errors.password && <p className='text-sm mt-2 text-red-700'>{errors.password.message}</p>}

                    </div>
                    
                    <div className="form-control mt-6">
                        <input type="submit" className="btn btn-primary" value="Login" />
                        <Link className='font-semibold mt-4  text-blue-600' to="/login">Alredy have account? Login Now</Link>
                    </div>
                </form>
               
                <div className="divider">OR</div>
                <div className='card-body '>
                   <button onClick={handleGoolgeLogin} className="btn btn-primary">Login With Goole</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default SignUp;