import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Image } from '../Image'
import { Footer } from '../Footer';

export const Kids = () => {
 
  return (
    <>
      <Navbar />
      
      <div className='bg bg-expand-lg'>
             <div className='row col-12 d-flex justify-content-center'>
                <img src='https://w0.peakpx.com/wallpaper/170/354/HD-wallpaper-cute-little-girl-is-sitting-on-dry-leaves-wearing-brown-dress-and-wreath-in-forest-background-cute.jpg' className='img' ></img>
                </div>
            </div>
      <Image/>
      <Footer/>
      
    </>
  )
}
