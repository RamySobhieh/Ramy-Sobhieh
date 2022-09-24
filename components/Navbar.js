import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
// import { useRouter } from 'next/router';
import NavLogo from '../public/assets/RSLogo.svg';



function Navbar({needbg}) {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('transparent');
    const [linkColor, setLinkColor] = useState('#1f2937');
    // const [position, setPosition] = useState('fixed')
    // const router = useRouter();
  
    // useEffect(() => {
    //   if (
    //     router.asPath === '/property' ||
    //     router.asPath === '/crypto' ||
    //     router.asPath === '/netflix' ||
    //     router.asPath === '/twitch'
    //   ) {
    //     setNavBg('transparent');
    //     setLinkColor('#ecf0f3');
    //   } else {
    //     setNavBg('#ecf0f3');
    //     setLinkColor('#1f2937');
    //   }
    // }, [router]);
  
    const handleNav = () => {
      setNav(!nav);
    };
  
    useEffect(() => {
        if (needbg) {
          setShadow(true);
          setNavBg('#1A1A1B')
        } else {
          setShadow(false);
          setNavBg('transparent')
        }
      }, [needbg]);


  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-lg shadow-grey-700 z-[100] ease-in-out duration-300'
          : 'fixed w-full h-20 z-[100] ease-in-out duration-300'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <Image
              src={NavLogo}
              width={120}
              height={50}
            />
        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
            <li className='ml-10 text-sm text-white/[0.6] uppercase hover:text-[#8105D8]'>
              <Link href="/#home">Home</Link>
            </li>
            <li className='ml-10 text-sm text-white/[0.6] uppercase hover:text-[#8105D8]'>
              <Link href="/#about">About</Link>
            </li>
            <li className='ml-10 text-sm text-white/[0.6] uppercase hover:text-[#8105D8]'>
              <Link href="/#skills">Skills</Link>
            </li>
            <li className='ml-10 text-sm text-white/[0.6] uppercase hover:text-[#8105D8]'>
              <Link href="/#projects">Projects</Link>
            </li>
            <li className='ml-10 text-sm text-white/[0.6] uppercase hover:text-[#8105D8]'>
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} className="text-white/[0.6] hover:scale-105 duration-150 ease-in cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen text-white/[0.6] bg-[#181818] p-10 ease-in duration-500 overflow-y-scroll scrollbar-hide'
              : 'fixed left-[-4000px] top-0 p-10 ease-in duration-500'
          }
        >
          <div className='scrollbar-hide'>
            <div className='flex w-full items-center justify-between'>
                  <Image
                    src={NavLogo}
                    width={120}
                    height={50}
                    alt='/'
                  />
              <div
                onClick={handleNav}
                className='rounded-full shadow-md bg-[#3a3b3c] shadow-[#121212] p-3 cursor-pointer group hover:scale-105 duration-300 ease-in'
              >
                <AiOutlineClose className="group-hover:text-[#8105D8] duration-300 ease-in"/>
              </div>
            </div>
            <div className='border-b border-white/[0.87] my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
                Let&#39;s build something legendary together
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href="/#home">
                <li onClick={() => setNav(false)} className='py-4 text-sm hover:text-[#8105D8]'>
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className='py-4 text-sm hover:text-[#8105D8]'>
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className='py-4 text-sm hover:text-[#8105D8]'>
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className='py-4 text-sm hover:text-[#8105D8]'>
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className='py-4 text-sm hover:text-[#8105D8]'>
                  Contact
                </li>
              </Link>
            </ul>
            <div className='pt-20'>
              <p className='uppercase tracking-widest text-[#8105D8]'>
                Let's Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/clint-briley-50056920a/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-md shadow-[#121212] bg-[#3a3b3c] p-3 cursor-pointer group hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn className="group-hover:text-[#8105D8] duration-300 ease-in"/>
                  </div>
                </a>
                <a
                  href='https://github.com/RamySobhieh'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-md shadow-[#121212] bg-[#3a3b3c] p-3 cursor-pointer hover:scale-105 ease-in duration-300 group'>
                    <FaGithub className="group-hover:text-[#8105D8] duration-300 ease-in" />
                  </div>
                </a>
                <Link href='/#contact'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-md shadow-[#121212] bg-[#3a3b3c] p-3 cursor-pointer hover:scale-105 ease-in duration-300 group'
                  >
                    <AiOutlineMail className="group-hover:text-[#8105D8] duration-300 ease-in" />
                  </div>
                </Link>
                <Link href='https://drive.google.com/uc?export=download&id=1se9-zu54F69MBsdbjuJCvM728tC16fur'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-md shadow-[#121212] bg-[#3a3b3c] p-3 cursor-pointer hover:scale-105 ease-in duration-300 group'
                  >
                    <BsFillPersonLinesFill className="group-hover:text-[#8105D8] duration-300 ease-in" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar