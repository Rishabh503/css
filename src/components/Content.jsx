import React from 'react'

const Content = () => {
  return (
     
    <div className="h-screen w-full flex flex-wrap relative">
        {/* left  */}
        <div className='h-full w-full sm:w-[50%]  px-[4vw] py-[5vw] leading-tight'>
          <h1 className='sm:text-[4vw] text-[10vw] font-bold'>Learn from the <span className='text-green-400'>coolest</span> and other senteneces</h1>
          <p className='sm:text-[1vw] text-[] mt-[2vw] mb-[2.5vw] font-semibold text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut illum itaque inventore? Sint, tempore dignissimos? Asperiores odio sint placeat tempora.</p>
          <button className=' text-white font-semibold rounded-lg bg-green-400 my-4 p-[1vw] text-[] sm:text-[1.2vw] '>
            Explore more
          </button>
        </div>
        {/* right  */}
        <div className='h-full sm:w-[50%] '>
          <img className='sm:h-full w-full sm:p-12 p-5 -mt-[130vw] shadow-lg sm:-mt-0 rounded-full' src="image.png" alt="" />
        </div>

    </div>
  )
}

export default Content