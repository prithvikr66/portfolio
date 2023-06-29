import React from 'react'

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
            <a href='' target='_blank'><span
            className='text-textBlue inline-flex relative cursor-pointer h-7'>Learn more.</span></a>
        </p>



    </section>
  )
}

export default Main