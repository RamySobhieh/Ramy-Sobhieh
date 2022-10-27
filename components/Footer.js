import{FaInstagram, FaLinkedinIn, FaGithub, FaWhatsapp} from "react-icons/fa"
import Link from 'next/link';

function Footer() {
  return (
    <div className="w-full h-[200px] bg-[#1a1a1b] pt-4">
        <div className="flex flex-col h-full justify-around items-center">
          <p className="uppercase text-2xl font-semibold tracking-wider"><span className="text-[#8105D8]">r</span>amy sobhieh</p>
          <div className="flex flex-row space-x-6 items-center justify-center">
            <Link href="https://www.linkedin.com/in/ramy-sobhieh-0b06b8251/">
              <FaLinkedinIn className="h-5 w-5 text-white/[0.6] hover:text-white cursor-pointer ease-in duration-150"/>
            </Link>

            <Link href="https://www.instagram.com/ramysobhieh/">
              <FaInstagram className="h-5 w-5 text-white/[0.6] hover:text-white cursor-pointer ease-in duration-150"/>
            </Link>

            <Link href="https://github.com/RamySobhieh">
              <FaGithub className="h-5 w-5 text-white/[0.6] hover:text-white cursor-pointer ease-in duration-150"/>
            </Link>

            <Link href="https://api.whatsapp.com/send?phone=96170616764">
              <FaWhatsapp className="h-5 w-5 text-white/[0.6] hover:text-white cursor-pointer ease-in duration-150"/>
            </Link>

          </div>
          <p className="text-xs text-white/[0.6]">Copyright 2022 RamySobhieh, All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer