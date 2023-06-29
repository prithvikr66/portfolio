import React from 'react'
import {AiFillGithub,AiOutlineLinkedin,
    AiOutlineInstagram,
    AiOutlineBehance} from "react-icons/ai"

const Left = () => {
  return (
    <div className='w-full h-full  flex flex-col items-center justify-end gap-4 text-textLight text-[25px]'>
      <div className='flex flex-col gap-4'>
         <a href='https://github.com/prithvikr66' target='_blank'>
        <span
        className='w-10 h-10 text-xl rounded-full bg-hoverColor inline-flex items-center justify-center hover:text-textBlue '
        > <AiFillGithub/>
        </span>
       </a>
       <a href='https://github.com/prithvikr66' target='_blank'>
        <span
        className='w-10 h-10 text-xl rounded-full bg-hoverColor inline-flex items-center justify-center hover:text-textBlue '
        >  
        <AiOutlineLinkedin/>
       
        </span>
       </a>
       <a href='https://github.com/prithvikr66' target='_blank'>
        <span
        className='w-10 h-10 text-xl rounded-full bg-hoverColor inline-flex items-center justify-center hover:text-textBlue '
        >  
        <AiOutlineBehance/>
        
        </span>
       </a>
       <a href='https://github.com/prithvikr66' target='_blank'>
        <span
        className='w-10 h-10 text-xl rounded-full bg-hoverColor inline-flex items-center justify-center hover:text-textBlue '
        > 
         
        <AiOutlineInstagram/>
        </span>
       </a>
      </div>
      <div className="w-[2px] h-32 bg-textDark"></div>
        </div>
       
  )
}

export default Left