import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';


const Home: NextPage = () => {
  const [ref, inView] = useInView();

  useEffect(() => {
    console.log(inView)
  }, [inView]);

  return (
    <div className="scroll-smooth">
      <Head>
        <title>Ramy Sobhieh</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;700;900&display=swap" rel="stylesheet"></link>
      </Head>
      <Navbar needbg={inView} />
      <div className="h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-rounded-lg scrollbar-thumb-[#3a3b3c] hover:scrollbar-thumb-white/[0.6] scrollbar-track-transparent">
        <Main />
        <div className="relative overflow-hidden">
          <div ref={ref} className="absolute h-full bg-transparent w-full top-20 -z-20"></div>
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home
