import React from 'react'
import LogIn from '../LogIn'
import { Navbar } from './Navbar'
import { Footer } from '../Footer' 

export const About = () => {

  return (
    <>

      <Navbar />
      <div className='container-fluid' id='b1'>
        <div className='bg bg-expand-lg'>
          <div className='row  d-flex  '>
            <div className=' col-12  col-lg-6 col-md-6 col-sm-12 d-flex mt-4 '>
              <img src='https://www.cnet.com/a/img/resize/2d1be79bf2442c59dbd404e461f9f1ac9a61eea2/hub/2017/08/28/5a6e1f31-590b-4368-be1f-56202015db43/amazon-corporate-buildings-9461.jpg?auto=webp&fit=crop&height=1200&width=1200' className='img' id='img1'></img>
            </div>
            <div className=' col-12 col-lg-6 col-md-6 col-sm-12 d-flex mt-4  ' id='d1'>
              <div className='box'>
                <h1 >About Us</h1>

                <h4>Culture</h4>
                <p>Culture – encompasses the social behavior and norms found in human societies, as well as the knowledge, beliefs, arts, laws, customs, capabilities and habits of the .</p>

                <h4>Geography</h4>
                <p>Geography – field of science devoted to the study of the lands, features, inhabitants, and phenomena of the Earth and planets.</p>

                <h4>Health</h4>
                <p>Health – state of physical, mental and social well-being..</p>



              </div>
              <br />
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid'>
        <div className='row  col-12 d-flex  mt-2 mb-2'>
          <div className='col-12 col-lg-6 col-md-6 col-sm-12 d-flex ' id='f1' >
            <LogIn />
          </div>
          <div className=' col-12 col-lg-6 col-md-6 col-sm-12 '>
            <div class="mapouter ">
              <div class="gmap_canvas">
                <iframe class="gmap_iframe" width="100%"  frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=karve nagar pune&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                </iframe>
                <a href="https://piratebay-proxys.com/"></a>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer/>
      
      

    </>
  )
}
