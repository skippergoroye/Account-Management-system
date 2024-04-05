import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/PNG/logo.png';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };

    return (
        <nav className='w-full fixed top-0 left-0 z-10'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
                    <span className='text-3xl w-28 text-indigo-600 mr-1 pt-2'>
                        <NavLink to="/">
                            <img 
                                src={Logo}
                                alt="Logo"
                                className='h-[40px]'
                            />
                        </NavLink>
                    </span>
                </div>

                <div onClick={toggleMenu} className='text-3xl text-primary absolute right-8 top-6 cursor-pointer md:hidden'>
                    <FontAwesomeIcon icon={faBars} />
                </div>

                <ul className={`logo md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white text-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in`}>
                    <li className='md:ml-8 text-xl md:mb-0 mb-3 md:my-0 my-7'>
                        <NavLink to="/login" className='text-primary hover:text-gray-400 duration-500'>Sign In</NavLink>
                    </li>
                    <li className='md:ml-8 text-xl md:mt-0 mt-2 md:my-0 my-12'>
                        <NavLink to="/create-account" className='text-white bg-primary py-2 px-6 rounded-lg'>Create Account</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
