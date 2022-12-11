import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';


const Navbar = () => {
    const [nav, setNav] = useState(false)


    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'Projects'
        },
        {
            id: 3,
            link: 'skills'
        },
        {
            id: 4,
            link: 'about'
        },
        {
            id: 5,
            link: 'contact'
        }
    ];


    return (
        <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
            <div>
                <h2 className='text-4xl font-bold ml-2'>Hossain Ahmad</h2>
            </div>
            <ul className='hidden md:flex'>
                {links.map(({ link, id }) => (
                    <li key={id}
                        className='px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200'>
                        <Link to={link} smooth duration={500}>{link}</Link>
                    </li>
                ))}
            </ul>
            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 md:hidden'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className='flex flex-col justify-center items-center absolute left-0 top-0 w-full h-screen bg-gradient-to-b from-black to-gray-800'>
                    {links.map(({ link, id }) => (
                        <li key={id}
                            className='px-4 cursor-pointer capitalize font-medium text-white py-6 text-3xl'>
                           <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Navbar;