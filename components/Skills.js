import Image from 'next/image';
import React from 'react';
import Html from '../public/assets/html.svg';
import Css from '../public/assets/css.svg';
import Javascript from '../public/assets/javascript.svg';
import ReactImg from '../public/assets/react.svg';
import Csharp from '../public/assets/csharp.svg';
import Cplus from '../public/assets/c++.svg';
import NextJS from '../public/assets/nextjs.svg';
import Java from '../public/assets/java.svg';
import Material from '../public/assets/material-ui.svg'
import Python from '../public/assets/python.svg';
import SQL from'../public/assets/SQL.svg';

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const lineVariant = {
  visible: { width:460, transition:{type:'spring',duration:1,bounce:'0.3'} },
  hidden: { width:0 }
};


function Skills() {

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
  <div id='skills' className=' w-full h-full md:min-h-screen p-6'>
    <div  className=' mx-auto flex flex-col  h-full text-center md:text-start pt-20'>
      <div className="w-full max-w-[1240px] mx-auto">
        <p ref={ref} className='mb-8 md:mb-0 text-xl font-bold tracking-widest uppercase text-[#8105D8]'>
          Skills and experience
        </p>
        <div className="hidden md:flex flex-row mt-2 mb-4 space-x-2">
          <motion.div className="w-[0px] bg-[#8105D8] h-[3px] rounded-full"
            variants={lineVariant}
            initial="hidden"
            animate={control}></motion.div>
          <div className="w-[8px] bg-[#8105D8] h-[3px] rounded-full"></div>
          <div className="w-[8px] bg-[#8105D8] h-[3px] rounded-full"></div>
          <div className="w-[8px] bg-[#8105D8] h-[3px] rounded-full"></div>
        </div>
        <h2 className="py-4">What I Know</h2>
      </div>
      <div className="flex flex-col md:flex-row w-full h-full mx-auto max-w-[1240px]">

        <div className='flex flex-col w-full h-full md:w-[50%] space-y-12 mb-16 items-center md:items-start pt-[24px]'>

          <div className='flex text-start flex-col sm:flex-row sm:space-x-16 md:px-0 items-center sm:items-start justify-center'>
            <div className="flex justify-center w-[200px] sm:w-[120px]  mb-2 sm:mb-0">
              <p className='text-base sm:w-[120px] md:text-l tracking-wide text-[#8105D8]'>2019 - Current</p>
            </div>
            <div className="flex flex-col space-y-1 justify-center items-center sm:items-start sm:justify-start sm:w-[200px]">
              <p className='text-base md:text-l tracking-wide'>Electrical Enginner Degree</p>
              <p className='text-base md:text-l tracking-wide text-white/[0.44]'>Lebanese University</p>
            </div>
          </div>

          <div className='flex text-start flex-col sm:flex-row sm:space-x-16 md:px-0 items-center sm:items-start justify-center'>
            <div className="flex justify-center w-[200px] sm:w-[120px]  mb-2 sm:mb-0">
              <p className='text-base sm:w-[120px] md:text-l tracking-wide text-[#8105D8]'>2018 - 2019</p>
            </div>
            <div className="flex flex-col space-y-1 justify-center items-center sm:items-start sm:justify-start sm:w-[200px]">
              <p className='text-base md:text-l tracking-wide'>Lifeguard</p>
              <p className='text-base md:text-l tracking-wide text-white/[0.44]'>Waves Aqua Park</p>
            </div>
          </div>

          <div className='flex text-start flex-col sm:flex-row sm:space-x-16 md:px-0 items-center sm:items-start justify-center'>
            <div className="flex justify-center w-[200px] sm:w-[120px]  mb-2 sm:mb-0">
              <p className='text-base sm:w-[120px] md:text-l tracking-wide text-[#8105D8]'>2020 - 2022</p>
            </div>
            <div className="flex flex-col space-y-1 justify-center items-center sm:items-start sm:justify-start sm:w-[200px]">
              <p className='text-base md:text-l tracking-wide'>Electrical Engineer Internship</p>
              <p className='text-base md:text-l tracking-wide text-white/[0.44]'>ES Office</p>
            </div>
          </div>


        </div>

                {/* skills grid */}
        <div className="grid grid-cols-3 grid-rows-4 lg:grid-cols-4 gap-2 w-[100%] h-full md:w-[50%]">
        
          <div className="flex flex-col justify-center h-[150px] items-center">
            <div className="peer w-[70px] h-[70px] rounded-full bg-red-400 flex items-center justify-center mb-2 hover:scale-105 shadow-lg shadow-grey-700 duration-150 ease-in">
              <Image src={Html} alt="/" width={45} height={45}></Image>
            </div>
            <p className="text-base text-white/[0.6] peer-hover:text-white/[0.87] font-bold">HTML</p>
          </div>

          <div className="flex flex-col  justify-center h-[150px] items-center">
            <div className="peer w-[70px] h-[70px] rounded-full bg-blue-400 flex items-center justify-center mb-2 hover:scale-105 shadow-lg shadow-grey-700 duration-150 ease-in">
              <Image src={Css} alt="/" width={45} height={45}></Image>
            </div>
            <p className="text-base text-white/[0.6] peer-hover:text-white/[0.87] font-bold">CSS</p>
          </div>

          <div className="flex flex-col  justify-center h-[150px] items-center">
            <div className="peer w-[70px] h-[70px] rounded-full bg-yellow-200 flex items-center justify-center mb-2 hover:scale-105 shadow-lg shadow-grey-700 duration-150 ease-in">
              <Image src={Javascript} alt="/" width={45} height={45}></Image>
            </div>
            <p className="text-base text-white/[0.6] peer-hover:text-white/[0.87] font-bold">JavaScript</p>
          </div>

          <div className="flex flex-col  justify-center h-[150px] items-center">
            <div className="peer w-[70px] h-[70px] rounded-full bg-[#6FF8C3] flex items-center justify-center mb-2 hover:scale-105 shadow-lg shadow-grey-700 duration-150 ease-in">
              <Image src={ReactImg} alt="/" width={45} height={45}></Image>
            </div>
            <p className="text-base text-white/[0.6] peer-hover:text-white/[0.87] font-bold">React</p>
          </div>

          <div className="flex flex-col  justify-center h-[150px] items-center">
            <div className="peer w-[70px] h-[70px] rounded-full bg-[#b8b8b8] flex items-center justify-center mb-2 hover:scale-105 shadow-lg shadow-grey-700 duration-150 ease-in">
              <Image src={NextJS} alt="/" width={45} height={45}></Image>
            </div>
            <p className="text-base text-white/[0.6] peer-hover:text-white/[0.87] font-bold">NextJs</p>
          </div>

          <div className="flex flex-col  justify-center h-[150px] items-center">
            <div className="peer w-[70px] h-[70px] rounded-full bg-[#F579C8] flex items-center justify-center mb-2 hover:scale-105 shadow-lg shadow-grey-700 duration-150 ease-in">
              <Image src={Material} alt="/" width={45} height={45}></Image>
            </div>
            <p className="text-base text-white/[0.6] peer-hover:text-white/[0.87] font-bold">Material-UI</p>
          </div>

          <div className="flex flex-col  justify-center h-[150px] items-center">
            <div className="peer w-[70px] h-[70px] rounded-full bg-blue-500 flex items-center justify-center mb-2 hover:scale-105 shadow-lg shadow-grey-700 duration-150 ease-in">
              <Image src={Cplus} alt="/" width={45} height={45}></Image>
            </div>
            <p className="text-base text-white/[0.6] peer-hover:text-white/[0.87] font-bold">C++</p>
          </div>

          <div className="flex flex-col  justify-center h-[150px] items-center">
            <div className="peer w-[70px] h-[70px] rounded-full bg-purple-400 flex items-center justify-center mb-2 hover:scale-105 shadow-lg shadow-grey-700 duration-150 ease-in">
              <Image src={Csharp} alt="/" width={45} height={45}></Image>
            </div>
            <p className="text-base text-white/[0.6] peer-hover:text-white/[0.87] font-bold">C#</p>
          </div>

          <div className="flex flex-col  justify-center h-[150px] items-center">
            <div className="peer w-[70px] h-[70px] rounded-full bg-[#fbbf8e] flex items-center justify-center mb-2 hover:scale-105 shadow-lg shadow-grey-700 duration-150 ease-in">
              <Image src={Java} alt="/" width={45} height={45}></Image>
            </div>
            <p className="text-base text-white/[0.6] peer-hover:text-white/[0.87] font-bold">Java</p>
          </div>

          <div className="flex flex-col  justify-center h-[150px] items-center">
            <div className="peer w-[70px] h-[70px] rounded-full bg-yellow-100 flex items-center justify-center mb-2 hover:scale-105 shadow-lg shadow-grey-700 duration-150 ease-in">
              <Image src={Python} alt="/" width={45} height={45}></Image>
            </div>
            <p className="text-base text-white/[0.6] peer-hover:text-white/[0.87] font-bold">Python</p>
          </div>

          <div className="flex flex-col  justify-center h-[150px] items-center">
            <div className="peer w-[70px] h-[70px] rounded-full bg-red-400 flex items-center justify-center mb-2 hover:scale-105 shadow-lg shadow-grey-700 duration-150 ease-in">
              <Image src={SQL} alt="/" width={45} height={45}></Image>
            </div>
            <p className="text-base text-white/[0.6] peer-hover:text-white/[0.87] font-bold">SQL</p>
          </div>

        </div>
      </div>
    </div>
  </div>


  )
}

export default Skills