import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { UserAuth } from '../../ContexAPI/AuthProvider';

const Navbar = () => {
    const { logout, user } = useContext(UserAuth)
    const handleLoagout = () => {
        logout()
            .then(() => {
                toast.success("successfully logout")
            }).catch(err => {
                console.log(err);
            })
    }
    console.log(user)
    const menuList = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add-blog">Add Blog</Link></li>
    </>



    return (
        <div className="navbar bg-base-100 shadow-2xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuList}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">Kurenai</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuList}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid? 
                    <div className="flex items-center gap-3">
                    {/* <div className="form-control">
                      <input type="text" placeholder="Search" className="input input-bordered" />
                    </div> */}
                     <p>Welcome, {user?.displayName}</p>
                    <div className="dropdown dropdown-end">
                      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                          <img src={user?.photoURL} alt="/" title={user?.displayName}/>
                        </div>
                      </label>
                      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                       <li><button onClick={handleLoagout}>Logout</button></li>
                      </ul>
                    </div>
                  </div>
                :
                <Link to="/login" className="btn">Login</Link>
                }
                
              
            </div>
        </div>
    );
};

export default Navbar;