import React from 'react'
import { ImageWomen } from '../ImageWomen';
import { Navbar } from './Navbar'
import { Footer } from '../Footer';

export const Women = () => {
  // const myStyle = {
  //   backgroundImage: "url('https://img.freepik.com/free-photo/two-beautiful-women-shopping-town_1303-16426.jpg?w=2000')",
  //   height: '100vh',
  //   backgroundSize: 'cover',
  //   // marginTop:'-50px',
  //   fontSize: '50px',
  //   BackgroundRepeate: 'no-repeate'

  // };
    return (
        <>

          <Navbar/>
          <div className='bg bg-expand-lg'>
             <div className='row col-12 d-flex justify-content-center'>
                <img src='https://img.freepik.com/free-photo/two-beautiful-women-shopping-town_1303-16426.jpg?w=2000' className='img' ></img>
                </div>
            </div>
          <ImageWomen/>
          <Footer/>


        </>
    )
}
