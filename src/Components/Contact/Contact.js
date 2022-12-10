import React from 'react';

const Contact = () => {
    return (
        <div className='w-full h-screen bg-gradient-to-b from-black to-gray-800 py-3'>
            <form className='text-center'>
                <h2 className='text-4xl font-bold text-white py-3'>Contact</h2>
                <input type="text" placeholder="Your Name" className="input input-bordered input-secondary w-full mb-6 max-w-xs focus:outline-none" /><br />
                <input type="text" placeholder="Email Address" className="input input-bordered input-secondary w-full mb-6 max-w-xs focus:outline-none" /><br />
                <textarea className="textarea w-80 h-28 mb-5 textarea-success" placeholder="Your Message focus:outline-none"></textarea><br />
                <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300  '>Submit</button>
            </form>
        </div>
    );
};

export default Contact;