import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full h-24 bg-white-200 flex items-center justify-between px-[3vw] sm:px-[4vw] border border-black'>
        <h2 className= ' text-[6vw] sm:text-[2vw] font-extrabold'>Logo</h2>
        <div className='flex gap-12'>
            <h4 className='text-[4vw] sm:text-[1.5vw] hidden sm:block  font-semibold'>Store</h4>
            <h4 className='text-[4vw] sm:text-[1.5vw] hidden sm:block font-semibold'>Courses</h4>
            <h4 className='text-[4vw] sm:text-[1.5vw] hidden sm:block font-semibold' >Career</h4>
            <h4 className='text-[4vw] sm:text-[1.5vw] hidden sm:block font-semibold'>Blog</h4>
            <button className='items-center block sm:hidden text-[10vw] font-semibold'>=</button>
        </div>
    </nav>
  )
}

export default Navbar