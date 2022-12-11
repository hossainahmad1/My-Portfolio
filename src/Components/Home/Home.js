import React from 'react';
import img from '../../assets/hossain.jpg'
import { MdKeyboardArrowRight } from 'react-icons/md'

const Home = () => {
    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center h-full justify-center px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-3xl sm:text-7xl text-white font-sm'>I am a Frontend Developer</h2>
                    <p className='text-gray-400 py-4 max-w-md'>I am 6 months experience in the web Developer in Progeramming-hero .I love this work, and my experience is biggest hairer education </p>
                    <div>
                        <button className='group text-white px-6 py-3 w-fit my-2 flex justify-center items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300 '><MdKeyboardArrowRight size={25} className='ml-1' /></span>
                        </button>
                    </div>
                </div>
                <div>
                    <img className='rounded-2xl mx-auto w-2/3 md:w-full' src={img} alt="my profile" />
                </div>
            </div>
        </div>
    );
};

export default Home;