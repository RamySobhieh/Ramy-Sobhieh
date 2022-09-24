import Image from "next/image";
import  Netflix from '../public/assets/netflix.svg'
import Music from '../public/assets/music.svg';
import Store from '../public/assets/store.svg';
import Link from 'next/link';
import {AiOutlineLink} from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const lineVariant = {
  visible: { width:460, transition:{type:'spring',duration:1,bounce:'0.3'} },
  hidden: { width:0 }
};


function Projects() {

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
    <div id='projects' className='w-full h-full md:min-h-screen'>
        <div  className='max-w-[1240px] mx-auto px-6 py-16 group pt-24 text-center md:text-start'>
            <p ref={ref} className="text-xl font-bold tracking-widest uppercase text-[#8105D8]">Projects</p>
            <div className="hidden md:flex flex-row mt-2 mb-4 space-x-2">
                <motion.div 
                variants={lineVariant}
                initial="hidden"
                animate={control}
                className="w-[0px] bg-[#8105D8] h-[3px] rounded-full"></motion.div>
                <div className="w-[8px] bg-[#8105D8] h-[3px] rounded-full"></div>
                <div className="w-[8px] bg-[#8105D8] h-[3px] rounded-full"></div>
                <div className="w-[8px] bg-[#8105D8] h-[3px] rounded-full"></div>
            </div>
            <h2 className="py-4 mb-2">What I've  Built</h2>
            <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-8 '>

              <div className="flex flex-col space-y-6 justify-center items-center hover:scale-105 duration-300 ease-in group">
                <div className="h-[270px] w-[300px] md:w-[350px] rounded-lg overflow-hidden hover:shadow-l shadow-gray-700 duration:300 ease-in peer">
                  <div className="flex flex-col">
                    <div className="flex h-[200px] w-full bg-[#212121] justify-center items-center">
                      <Image src={Netflix} alt="/" width="300" height="150"></Image>
                    </div>
                    <div className="flex justify-center items-center h-[70px] w-full bg-[#8105D8] space-x-10">
                      <Link href='/'>
                        <div className="text-white/[0.87] hover:text-[#FE59D7] duration-150 ease-in cursor-pointer">
                          <AiOutlineLink className="w-8 h-8"/>
                        </div>
                      </Link>

                      <Link href='/'>
                        <div className="text-white/[0.87] hover:text-[#FE59D7] duration-150 ease-in cursor-pointer">
                          <FaGithub className="w-8 h-8"/>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <p className="text-lg text-white/[0.44] peer-hover:text-white/[0.87] font-bold">Netflix Clone</p>
              </div>

              <div className="flex flex-col space-y-6 justify-center items-center hover:scale-105 duration-300 ease-in">
                <div className="h-[270px] w-[300px] md:w-[350px] rounded-lg overflow-hidden hover:shadow-l shadow-gray-700 duration:300 ease-in peer">
                  <div className="flex flex-col">
                    <div className="flex h-[200px] w-full bg-[#212121] justify-center items-center">
                      <Image src={Music} alt="/" width="300" height="150"></Image>
                    </div>
                    <div className="flex justify-center items-center h-[70px] w-full bg-[#8105D8] space-x-10">
                      <Link href='/'>
                        <div className="text-white/[0.87] hover:text-[#FE59D7] duration-150 ease-in cursor-pointer">
                          <AiOutlineLink className="w-8 h-8"/>
                        </div>
                      </Link>

                      <Link href='/'>
                        <div className="text-white/[0.87] hover:text-[#FE59D7] duration-150 ease-in cursor-pointer">
                          <FaGithub className="w-8 h-8"/>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <p className="text-lg text-white/[0.44] peer-hover:text-white/[0.87] font-bold">Spotify Redesigned</p>
              </div>

              <div className="flex flex-col space-y-6 justify-center items-center hover:scale-105 duration-300 ease-in">
                <div className="h-[270px] w-[300px] md:w-[350px] rounded-lg overflow-hidden hover:shadow-l shadow-gray-700 duration:300 ease-in peer">
                  <div className="flex flex-col">
                    <div className="flex h-[200px] w-full bg-[#212121] justify-center items-center">
                      <Image src={Store} alt="/" width="300" height="150"></Image>
                    </div>
                    <div className="flex justify-center items-center h-[70px] w-full bg-[#8105D8] space-x-10">
                      <Link href='/'>
                        <div className="text-white/[0.87] hover:text-[#FE59D7] duration-150 ease-in cursor-pointer">
                          <AiOutlineLink className="w-8 h-8"/>
                        </div>
                      </Link>

                      <Link href='/'>
                        <div className="text-white/[0.87] hover:text-[#FE59D7] duration-150 ease-in cursor-pointer">
                          <FaGithub className="w-8 h-8"/>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <p className="text-lg text-white/[0.44] peer-hover:text-white/[0.87] font-bold">Store Website</p>
              </div>


            </div>
        </div>
    </div>
  )
}

export default Projects