import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';


const Navbar = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    const menuItems = <>
        {user && <p className='text-blue-500 font-bold text-xl text-end'><li><Link to='/'>Home</Link></li></p>}
        {user && <li><Link className='text-blue-500 font-bold text-xl' to='/contact'>Contact</Link></li>}
        <li>{user ? <button onClick={logout} className="text-blue-500 font-bold text-xl">Sign Out</button> : <Link className='text-blue-500 font-bold text-xl' to='/login'>Login</Link>}</li>
    </>
    return (
        <div className=''>
            <div className="bg-transparent sticky ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>

                </div>
                <div className="hidden lg:flex justify-between px-24">
                    <div className="btn btn-ghost normal-case text-2xl font-bold text-blue-400">Face</div>
                    <div className='flex '>
                        <div> {user && <p className='text-blue-500 font-bold text-xl text-end'><Link to='/'>Home</Link></p>}</div>
                        <div>{user && <Link className='ml-5 mr-5 text-blue-500 font-bold text-xl' to='/contact'>Contact</Link>}</div>
                        <div>{user ? <button onClick={logout} className="text-blue-500 font-bold text-xl">Sign Out</button> : <Link className='text-blue-500 font-bold text-xl text-right' to='/login'>Login</Link>}</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;