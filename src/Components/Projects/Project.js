import React from 'react';
import img1 from '../../assets/code.jpg';
import img2 from '../../assets/coding.jpg';
import img3 from '../../assets/deer.jpeg';
import img4 from '../../assets/phone.jpeg';
import img5 from '../../assets/mancode.jpeg';
import img6 from '../../assets/laptop.jpg';


const Project = () => {
    return (
        <div name='projects' className='bg-gradient-to-b from-black to-gray-700 lg:px-32  '>
            <h2 className='text-4xl font-bold text-white lg:px-12 py-7'>Projects</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 px-12 gap-8 sm:justify-center gap-y-5 py-2'>
                <div className="card card-compact bg-base-100 shadow-xl hover:scale-105 duration-500 ">
                    <figure><img className='h-[250px]' src={img1} alt="Shoes" /></figure>
                    <div className="card-body bg-gradient-to-b from-black to-gray-800 ">
                        <div className="card-actions">
                            <button className="btn btn-primary mr-7">Details</button>
                            
                        </div>
                    </div>
                </div>
                <div className="card card-compact  bg-base-100 shadow-xl hover:scale-105 duration-300">
                    <figure><img className='h-[250px]' src={img2} alt="Shoes" /></figure>
                    <div className="card-body bg-gradient-to-b from-black to-gray-800 ">
                        <div className="card-actions">
                            <button className="btn btn-primary mr-7">Details</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact  bg-base-100 shadow-xl hover:scale-105 duration-300">
                    <figure><img className='h-[250px]' src={img3} alt="Shoes" /></figure>
                    <div className="card-body bg-gradient-to-b from-black to-gray-800 ">
                        <div className="card-actions">
                            <button className="btn btn-primary mr-7">Details</button> 
                        </div>
                    </div>
                </div>
                <div className="card card-compact  bg-base-100 shadow-xl hover:scale-105 duration-300">
                    <figure><img className='h-[250px]' src={img4} alt="Shoes" /></figure>
                    <div className="card-body bg-gradient-to-b from-black to-gray-800 ">

                        <div className="card-actions">
                            <button className="btn btn-primary mr-7">Details</button>
                            
                        </div>
                    </div>
                </div>
                <div className="card card-compact  bg-base-100 shadow-xl hover:scale-105 duration-300">
                    <figure><img className='h-[250px]' src={img5} alt="Shoes" /></figure>
                    <div className="card-body bg-gradient-to-b from-black to-gray-800 ">

                        <div className="card-actions">
                            <button className="btn btn-primary mr-7">Details</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact  bg-base-100 shadow-xl hover:scale-105 duration-300">
                    <figure><img className='h-[250px]' src={img6} alt="Shoes" /></figure>
                    <div className="card-body bg-gradient-to-b from-black to-gray-800">
                        <div className="card-actions">
                            <button className="btn btn-primary mr-7">Details</button> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;