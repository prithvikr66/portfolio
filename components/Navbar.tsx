"use client"
import React from 'react'
import Logo from "../public/logo.png"
import Image from 'next/image'
import Link from 'next/link'
import {motion} from "framer-motion"
import Button from './Button'
const Navbar = () => {
  return (
    <div className='w-full h-20 shadow-navbarShadow sticky top-0 z-50 bg-bodyColor'
     >
        <div className='max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between' >
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}}>
             <Image className="w-16 cursor-pointer  " src={Logo} alt=""/>   
            </motion.div>
            <div className='hidden mdl:inline-flex text-[13px] gap-9 flex items-center '>
                <Link className="text-textDark hover:text-textBlue font-bold duration-300
                nav-link"
                href="#home">Home</Link>
                <Link className="text-textDark hover:text-textBlue font-bold duration-300
                nav-link"
                href="#home">About</Link>
                <Link className="text-textDark hover:text-textBlue font-bold duration-300
                nav-link"
                href="#home">Experiences</Link>
                <Link className="text-textDark hover:text-textBlue font-bold duration-300
                nav-link"
                href="#home">Projects</Link>
                <Link className="text-textDark hover:text-textBlue font-bold duration-300
                nav-link"
                href="#home">Contact</Link>
                <Link className="text-textDark hover:text-textBlue font-bold duration-300
                nav-link"
                href="#home">
                    <Button 
                    text="Resume"
                    url="#"/>
                    </Link>
                
            </div>
          

        </div>
     </div>
  )
}

export default Navbar