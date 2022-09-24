import {HiPhone, HiOutlineMail,HiLocationMarker} from 'react-icons/hi'
import {AiOutlineInstagram,AiOutlineWhatsApp} from 'react-icons/ai';
import {FaLinkedinIn} from 'react-icons/fa';
import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const lineVariant = {
  visible: { width:460, transition:{type:'spring',duration:1,bounce:'0.3'} },
  hidden: { width:0 }
};

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });


function Contact() {

    const control = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
        control.start("hidden");
      }
    }, [control, inView]);

    const [opensuc, setOpensuc] = useState(false);
    const [openfail, setOpenfail] = useState(false);
    const [firstname, setFirstname] = useState('');
    const[lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message , setMessage] = useState('');

    const handleChangeFN = event => {
        setFirstname(event.target.value);
      };
      const handleChangeLN = event => {
        setLastname(event.target.value);
      };
      const handleChangeEmail = event => {
        setEmail(event.target.value);
      };
      const handleChangeSubject = event => {
        setSubject(event.target.value);
      };
      const handleChangeMessage = event => {
        setMessage(event.target.value);
      };




    const handleOpenfail = () => {
        setOpenfail(true);
      };
    
      const handleClosefail = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenfail(false);
      };

      const handleOpensuc = () => {
        setOpensuc(true);
      };
    
      const handleClosesuc = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpensuc(false);
      };

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
        if(message.trim().length !== 0 && subject.trim().length !== 0 && firstname.trim().length !== 0 && lastname.trim().length !== 0 && email.trim().length !== 0)
        {
            emailjs.sendForm('service_17x8zy8', 'template_akrky19', form.current, 'Dh-dVm7vrw6GglUjR')
            .then((result) => {
                console.log(result.text);
                console.log("message sent");
                handleOpensuc();
            }, (error) => {
                console.log(error.text);
                console.log("errorrrrrr");
                handleOpenfail();
    
            });
        }
        else{
            handleOpenfail();
            console.log('forms not filled');
        }

    };

  return (
    <div id="contact" className="w-full h-full md:min-h-screen mb-20 pr-2 pl-2">
            <Snackbar open={opensuc} autoHideDuration={6000} onClose={handleClosesuc}>
                <Alert onClose={handleClosesuc} severity="success" sx={{ width: '100%' }}>
                Your Email was sent successfully!
                </Alert>
            </Snackbar>

            <Snackbar open={openfail} autoHideDuration={6000} onClose={handleClosefail}>
                <Alert onClose={handleClosefail} severity="error" sx={{ width: '100%' }}>
                There was an error sending your Email
                </Alert>
            </Snackbar>

        <div className="mx-auto max-w-[1240px] flex flex-col h-full text-center lg:text-start pt-24">

            {/* header component */}
            <div className="w-full max-w-[1240px] mx-auto mb-4">
                <p ref={ref}  className='mb-8 lg:mb-0 text-xl font-bold tracking-widest uppercase text-[#8105D8]'>
                Contact
                </p>
                <div className="hidden lg:flex flex-row mt-2 mb-4 space-x-2">
                    <motion.div 
                    variants={lineVariant}
                    initial="hidden"
                    animate={control}
                    className="w-[0px] bg-[#8105D8] h-[3px] rounded-full"></motion.div>
                    <div className="w-[8px] bg-[#8105D8] h-[3px] rounded-full"></div>
                    <div className="w-[8px] bg-[#8105D8] h-[3px] rounded-full"></div>
                    <div className="w-[8px] bg-[#8105D8] h-[3px] rounded-full"></div>
                </div>
                <h2 className="py-4">Let's get in touch</h2>
            </div>

            <div className="w-full h-full max-w-[1240px] mx-auto bg-[#212121] rounded-lg flex flex-col lg:flex-row p-2 mb">
                            {/* contact component */}
                <div className="rounded-lg bg-[#8105D8] w-full lg:w-[40%] text-white/[0.87]">
                    <div className="w-full h-full space-y-4 flex flex-col justify-between pt-10 pb-10 pl-6">
                        <div className="flex justify-start">
                            <p className="text-2xl font-bold mb-10">Contact Information</p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex flex-row w-full items-center justify-start ">
                                <HiPhone className="w-8 h-8 mr-6 text-[#FE59D7]"/>
                                <p className="text-lg tracking-wide cursor-pointer">+961 70616764</p>
                            </div>
                            <div className="flex flex-row w-full items-center justify-start">
                                <HiOutlineMail className="w-8 h-8 mr-6 text-[#FE59D7]"/>
                                <p className="text-lg tracking-wide">ramysobhieh@gmail.com</p>
                            </div>
                            <div className="flex flex-row w-full items-center justify-start">
                                <HiLocationMarker className="w-8 h-8 mr-6 text-[#FE59D7]"/>
                                <p className="text-lg tracking-wide">Beirut, Lebanon</p>
                            </div>
                        </div>

                        <div className="flex flex-row space-x-6">
                            <a href="https://www.instagram.com/ramysobhieh/">
                                <div className="flex justify-center items-center w-10 h-10 rounded-full bg-transparent hover:bg-[#FE59D7] duration-150 ease-in cursor-pointer">
                                    <AiOutlineInstagram className="w-6 h-6 text-white/[0.87]"/>
                                </div>
                            </a>

                            <a  href="https://api.whatsapp.com/send?phone=96170616764">
                                <div className="flex justify-center items-center w-10 h-10 rounded-full bg-transparent hover:bg-[#FE59D7] duration-150 ease-in cursor-pointer">
                                    <AiOutlineWhatsApp className="w-6 h-6 text-white/[0.87]"/>
                                </div>
                            </a>

                            <div className="flex justify-center items-center w-10 h-10 rounded-full bg-transparent hover:bg-[#FE59D7] duration-150 ease-in cursor-pointer">
                                <FaLinkedinIn className="w-6 h-6 text-white/[0.87]"/>
                            </div>
                        </div>
                    </div>
                </div>

            {/* email component */}
                <div className=" flex flex-col justify-between w-full lg:w-[60%] h-full p-8">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="flex flex-col space-y-24">
                            <div className="grid grid-cols-2 grid-rows-2 gap-y-12 lg:gap-x-20 gap-x-12">

                                <div class="relative">
                                    <input onChange={handleChangeFN} id="first_name" name="first_name" type="text" class="bg-transparent peer h-10 w-full border-b-2 border-white/[0.44] text-white/[0.87] placeholder-transparent focus:outline-none focus:border-[#8105D8]" placeholder="john@doe.com" />
                                    <label for="first_name" class="cursor-text absolute left-0 -top-3.5 text-white/[0.6] text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/[0.44] peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white/[0.6] peer-focus:text-sm">First Name</label>
                                </div>

                                <div class="relative">
                                    <input onChange={handleChangeLN} id="last_name" name="last_name" type="text" class="bg-transparent peer h-10 w-full border-b-2 border-white/[0.44] text-white/[0.87] placeholder-transparent focus:outline-none focus:border-[#8105D8]" placeholder="john@doe.com" />
                                    <label for="last_name" class="cursor-text absolute left-0 -top-3.5 text-white/[0.6] text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/[0.44] peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white/[0.6] peer-focus:text-sm">Last Name</label>
                                </div>

                                <div class="relative">
                                    <input onChange={handleChangeEmail} id="email" name="email" type="text" class="bg-transparent peer h-10 w-full border-b-2 border-white/[0.44] text-white/[0.87] placeholder-transparent focus:outline-none focus:border-[#8105D8]" placeholder="john@doe.com" />
                                    <label for="email" class="cursor-text absolute left-0 -top-3.5 text-white/[0.6] text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/[0.44] peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white/[0.6] peer-focus:text-sm">Email Address</label>
                                </div>

                                <div class="relative">
                                    <input onChange={handleChangeSubject} id="subject" name="subject" type="text" class="bg-transparent peer h-10 w-full border-b-2 border-white/[0.44] text-white/[0.87] placeholder-transparent focus:outline-none focus:border-[#8105D8]" placeholder="john@doe.com" />
                                    <label for="subject" class="cursor-text absolute left-0 -top-3.5 text-white/[0.6] text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/[0.44] peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white/[0.6] peer-focus:text-sm">Subject</label>
                                </div>
                                
                            </div>
                            
                            <div class="relative">
                                    <textarea onChange={handleChangeMessage} id="message" name="message" class="bg-transparent peer h-14 w-full border-b-2 border-white/[0.44] text-white/[0.87] placeholder-transparent focus:outline-none focus:border-[#8105D8]" placeholder="john@doe.com" />
                                    <label for="message" class="cursor-text absolute left-0 -top-6 text-white/[0.6] text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/[0.44] peer-placeholder-shown:top-1 peer-focus:-top-6 peer-focus:text-white/[0.6] peer-focus:text-sm">Your Message</label>
                            </div>

                            <div className="flex justify-center items-center lg:relative w-full">
                                <input type="submit" value="Send Message" className="lg:absolute cursor-pointer lg:right-0 text-[#8105D8] rounded-lg hover:text-white/[0.87] border border-[#8105D8] hover:bg-[#8105D8] focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium text-m text-center ease-in duration-150 h-[60px] w-[200px] uppercase" />
                            </div>


                        </div>
                    </form>

                </div>

            </div>



        </div>

    </div>
  )
}

export default Contact