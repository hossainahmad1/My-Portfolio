import React from 'react';
import html from '../../assets/skills/HTMl.png'
import css from '../../assets/skills/css.png'
import js from '../../assets/skills/js.webp'
import react from '../../assets/skills/react.png'
import bootstrap from '../../assets/skills/bootstrap.png'
import tailwind from '../../assets/skills/tailwind.png'

const Skills = () => {


    const skills = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: js,
            title: 'JAVASCRIPT',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: react,
            title: 'REACT',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: bootstrap,
            title: 'BOOTSTRAP',
            style: 'shadow-blue-500'
        },
        {
            id: 1,
            src: tailwind,
            title: 'TAILWINDCSS',
            style: 'shadow-sky-500'
        },
    ]


    return (
        <div name='skills' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <h2 className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Skills</h2>
                    <p className='py-6'>These are the technology I'v worked with</p>
                </div>
                <div className='w-full text-center grid grid-cols-2 md:grid-cols-3 gap-8 px-12 py-8 sm:px-0'>

                    {
                        skills.map(({ id, title, src, style }) => (
                            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img className='w-32 mx-auto' src={src} alt="" />
                                <p className='mt-3 '>{title}</p>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;