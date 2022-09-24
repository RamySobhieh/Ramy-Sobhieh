import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

function Main() {

    function sendMail(){
        window.open('mailto:ramysobhieh@gmail.com');
    }

  return (
    <div id='home' className='w-full h-screen text-center bg-[url(../public/assets/wavesbg.svg)] bg-cover bg-no-repeat bg-left bg-fixed'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
            <p className='uppercase text-sm tracking-widest text-white/[0.6]'>
                LET&#39;S BUILD SOMETHING TOGETHER
            </p>
            <h1 className='py-4 text-white/[0.87]'>
                Hi, I&#39;m <span className='text-[#8105D8]'> Ramy</span>
            </h1>
            <h1 className='py-2 text-white/[0.87]'>A Front-End Web Developer</h1>
            <p className='py-4 text-white/[0.87] sm:max-w-[70%] m-auto'>
                I&#39;m focused on building responsive front-end web applications while
                learning back-end technologies.
            </p>
            <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                <a
                href='https://www.linkedin.com/in/clint-briley-50056920a/'
                target='_blank'
                rel='noreferrer'
                >
                <div className='rounded-full bg-[#3a3b3c] shadow-lg shadow-[#121212] p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaLinkedinIn />
                </div>
                </a>
                <a
                href='https://github.com/fireclint'
                target='_blank'
                rel='noreferrer'
                >
                <div className='rounded-full shadow-lg bg-[#3a3b3c] shadow-[#121212] p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaGithub />
                </div>
                </a>
                <Link href='/#contact'>
                <div onClick={sendMail} className='rounded-full shadow-lg bg-[#3a3b3c] shadow-[#121212] p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail />
                </div>
                </Link>
                <Link href='/resume'>
                <div className='rounded-full shadow-lg bg-[#3a3b3c] shadow-[#121212] p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <BsFillPersonLinesFill />
                </div>
                </Link>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Main