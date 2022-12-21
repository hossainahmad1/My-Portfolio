import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLink = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin className='ml-2' size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/hossain-ahmad-1b8115258/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub className='ml-2' size={30} />
                </>
            ),
            href: 'https://github.com/hossainahmad1',

        },
        {
            id: 3,
            child: (
                <>
                    Email <HiOutlineMail className='ml-2' size={30} />
                </>
            ),
            href: 'mailto:hossain177922@gmail.com',

        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill className='ml-2' size={30} />
                </>
            ),
            href: '/Hossain Ahmad.pdf',
            style: 'rounded-br-md',
            download: true
        }
    ]


    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                {
                    links.map(({ id, child, style, download, href }) => (
                        <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-92px] hover:ml-[-8px] hover:rounded-md duration-300 bg-gray-500" + " " + style}>
                            <a className='flex justify-center items-center w-full text-white'
                                href={href}
                                download={download}
                                target='_blank'
                                rel='noreferrer'>
                                <>
                                    {child}
                                </>
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default SocialLink;