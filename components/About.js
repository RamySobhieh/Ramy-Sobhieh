import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/Neon Portrait small.png';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const lineVariant = {
  visible: { width:460, transition:{type:'spring',duration:1,bounce:'0.3'} },
  hidden: { width:0 }
};



function About() {
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
  <div id='about' className=' w-full md:h-screen p-6 flex items-center py-16 snap-start'>
    <div className='max-w-[1240px] m-auto md:grid grid-cols-2 xl:grid-cols-3 gap-8 text-center md:text-start'>
      <div  className='col-span-1 xl:col-span-2 mb-10'>
        <p ref={ref} className='uppercase text-xl font-bold tracking-widest text-[#8105D8]'>
          About
        </p>
        <div className="hidden md:flex flex-row mt-2 mb-2 space-x-2">
          <motion.div 
          className="w-[0px] bg-[#8105D8] h-[3px] rounded-full"
          variants={lineVariant}
          initial="hidden"
          animate={control}
          ></motion.div>
          <div className="w-[8px] bg-[#8105D8] h-[3px] rounded-full"></div>
          <div className="w-[8px] bg-[#8105D8] h-[3px] rounded-full"></div>
          <div className="w-[8px] bg-[#8105D8] h-[3px] rounded-full"></div>
        </div>
        <h2 className='py-4'>Who I Am</h2>
        <p className='py-2 text-white/[0.6]'>
          I am a 20-year-old electrical engineering student in Lebanon who is passionate about coding and software development. 
          I've always been curious about technologies and software, and amazed by all the powerful things that have been built. After taking my first class of OOP and algorithms
          during my first year of college, I've decided to dig deeper into the world of software development.
        </p>
        <p className='py-2 text-white/[0.6] mb-4'>
        I was immediately drawn to learn more after being fascinated by how complex programming can be. 
        I started studying javascript and became even more enthusiastic about creating interactive websites. 
        I'm currently developing frontend apps with React JS and studying new technologies and backend development.
        </p>
        <a href="https://drive.google.com/uc?export=download&id=1se9-zu54F69MBsdbjuJCvM728tC16fur">
          <button type="button" className="rounded-lg text-[#8105D8] hover:text-white/[0.87] border border-[#8105D8] hover:bg-[#8105D8] focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium text-m px-5 py-2.5 text-center mr-2 mb-2 ease-in duration-150 h-[60px] w-[200px] uppercase">Download Resume</button>
        </a>
      </div>
      <div className='w-[60%] md:w-[80%] min-w-[300px] h-auto m-auto flex items-center justify-center rounded-lg'>
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-b from-[#8105D8] to-[#FE59D7] blur opacity-75 group-hover:opacity-100  duration-1000 group-hover:duration-300 ease-in-out"></div>
          <Image src={AboutImg} className='w-full h-full object-cover rounded-lg' alt='/' />
        </div>
      </div>
    </div>
  </div>
  )
}

export default About

