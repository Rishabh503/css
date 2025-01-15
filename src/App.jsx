import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

  return (
    <div>
      <div className='bg-red-500 h-96 w-96'>
        <div className='h-[50%] w-[50%] bg-blue-500'></div>
        <div className='h-[50vh] w-[50vw] text-[5vw] bg-yellow-400'>works with the text also</div>
        <div className='h-[50vh] w-[50vw] text-[5vmax] bg-yellow-400'>works with the text also</div>
      </div>
      <div className='h-[40%] w-[50%] text-[30px] bg-orange-500 mt-[700px] '> Understanding em  
        <h1 className='text-[1em]'>it behaves acc to parent </h1>
        <h2 className='text-[1.5em]'>lets make it 1,5</h2>
        <h3 className='text-[3em]'>lets make triple</h3>
        <p className='text-[2rem]'>rem is relative to whole screen 1 rem : 16px</p>
      </div>
    </div>
  )
}

export default App
