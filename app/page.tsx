
import Left from '@/components/Left'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Right from '@/components/Right'
import Main from '@/components/Main'
import motion from "framer-motion"
import { About } from '@/components/About'



export default function Home() {
  return (
    <main className='w-full h-screen font-bodyFont bg-bodyColor text-textLight'> 
    <Navbar/>
    <div className='w-full h-[88vh] xl:flex items-center gap-20 justify-between'>
      <div
     
       className='hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0'><Left/></div>
      <div className='h-[88vh] w-full mx-auto p-4'><Main/>
      <About/></div>
      <div className='w-32 h-full fixed right-0 bottom-0' ><Right/></div>

    </div>



    </main>


  )
}
