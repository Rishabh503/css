import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Units from './components/units'
import Layout from './components/Layout'
import Media from './components/Media'
import Navbar from './components/Navbar'
import Content from './components/Content'

function App() {
 

  return (
    <>
    {/* <Units/> */}
    {/* <Layout/> */}
    {/* <Media/> */}
    <div className='h-full w-full relative '>
      <Navbar/>
      <Content/>
    </div>


    </>

  )
}

export default App
