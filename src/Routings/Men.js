import React from 'react'

import { Footer } from '../Footer'
import { MensI } from '../MensI'
import { Navbar } from './Navbar'


export const Men = () => {
 
  return (
    <>
     <Navbar/>
     <div className='bg bg-expand-lg'>
             <div className='row col-12 d-flex justify-content-center'>
                <img src='https://media.istockphoto.com/id/1293366109/photo/this-one-match-perfect-with-me.jpg?s=612x612&w=0&k=20&c=wJ6yYbRrDfdmoViuQkX39s2z_0lCiNQYgEtLU--0EbY=' className='img' ></img>
                </div>
                <br/>
                <MensI/>
                <br/>
                <Footer/>
            </div>
     
   
    </>
  )
}
