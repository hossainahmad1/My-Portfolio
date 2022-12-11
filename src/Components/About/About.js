import React from 'react';

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <h2 className='text-4xl font-bold inline border-b-4 border-gray-500'>About</h2>
                    <p className='text-xl mt-20'>I am a front-end Developer.My skill are HTML,CSS,Bootstrap,TailwindsCss,Javascript,React.js,Express.js and tools is Netlify,Github,Dev Tools,MongoDB,</p>
                    <br />
                    <p className='text-xl'>I have been working on coding with programming-hero for a year,I have over twenty Projects on web development.I love codding.
                        I am interested in App Development,Software Development.</p>
                </div>
            </div>
        </div>
    );
};

export default About;