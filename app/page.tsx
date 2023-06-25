import Left from '@/components/Left'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='w-full h-screen font-bodyFont bg-bodyColor text-textLight'> 
    <Navbar/>
    <div className='w-full h-[88vh] xl:flex items-center gap-20 justify-between'>
      <div className='mx-5px'><Left/></div>
      <div></div>
      <div></div>

    </div>



    </main>


  )
}
