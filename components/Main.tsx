import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    <section id="home"
    className='max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4'
    >
        <h3
        className='text-lg font-titleFont tracking-wide text-textBlue'>Hey, my name is</h3>
        <h1
        className='text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col'
        >Prithvi <span 
        className='text-textDark mt-2 lgl:mt-4'
        >I Code, Cook and Design</span></h1>
        <p className='text-base md:max-w-[650px] text-textDark font-medium'>
            I am a Novice web developer proficient in MERN stack technology also learning Typescript and Next-js.
            I also do poster designing and UI UX sometimes using Figma.
            I wish to explore Solidity and Tensorflow aswell.{""}
            
        </p>
        <a href='' target='_blank'><span
            className='text-textBlue inline-flex relative cursor-pointer group font-bold'>Learn more.
            </span>
            {/* /* <span className='asbolute w-full h-[1px] bg-textBlue left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500' ></span> */}
            </a> 

            <Button text='Check out my Projects' url="#"/>
           



    </section>
  )
}

export default Main