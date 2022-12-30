import React from 'react'

import {useNavigate} from 'react-router-dom'

export const BackImage = () => {
  const navigate= useNavigate();
  
   

  
    return ( 
      <>
        

        <h1 className='fluid'>
          <nav className='bg-dark navbar'>
            <div className=" row col-12 d-flex justify-content-center text-white">
              <h1 id='h2'>KIDS</h1>
              <h4 className=' text-white row col-3 '>Shop The Best For Your Beast
              </h4>
            </div>
          </nav>
        </h1>
        <div className='container-fluid '>
          <div className='row'>
            <div className="card col-12 col-sm-6 col-md-4 col-lg-3" >
              <img src="https://st.depositphotos.com/3029723/4759/i/950/depositphotos_47595341-stock-photo-fashion-kids-resting-on-the.jpg" width={310} height={310} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">₹1,331.00</h5>
                <p className="card-text">Kids Mandi Floral Kid Girls Dresses, Plazo for Summer Wear, Casual Wear.</p>
                 <button className="btn btn-primary"  onClick={()=>navigate('/1')}>Order Now</button>
              </div>
            </div>

            <div className="card  col-12 col-sm-6 col-md-4 col-lg-3" >
              <img src="https://media.istockphoto.com/id/1295801745/photo/cute-little-girl-with-hands-by-mouth-shouting-on-pink-background.jpg?b=1&s=170667a&w=0&k=20&c=5QAGps7cdBZEfuEyze5gaKdhSavq0ms9yz-RibR4z5o=" width={310} height={310} alt="..." />
              <div className="card-body">
                <h5 className="card-title">₹673.00</h5>
                <p className="card-text">Fashion Dream Girl’s Off White Lycra Top with Accordion Pleated Georgette.</p>
                <button to='' className="btn btn-primary" onClick={()=>navigate('/1')}>Order Now</button>
              </div>
            </div>
            <div className="card col-12 col-sm-6 col-md-4 col-lg-3" >
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw3qqgvxyPWCBko-H3DxktQ3_ZnkDC-XeQYSXm-WhDuAmd0B42mP7ID0e7xKxN4AtaEq0&usqp=CAU" width={310} height={310} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">₹1,234.00</h5>
                <p className="card-text">SK FASHION Kids Wear & Baby Boy's Clothing Set Of Fancy Cotton Blend.</p>
                <button to='' className="btn btn-primary" onClick={()=>navigate('/1')}>Order Now</button>
              </div>
            </div>
            <div className="card col-12 col-sm-6 col-md-4 col-lg-3" >
              <img src="https://i.pinimg.com/originals/9b/8f/f0/9b8ff00ca204041c837487f3d32be70a.jpg" width={310} height={310} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">₹999.00</h5>
                <p className="card-text">Dotson Kids Clothing Set for Boys - Jacket, Red Cotton Shirt .</p>
                <button  className="btn btn-primary" onClick={()=>navigate('/1')}>Order Now</button>
              </div>
            </div>
          </div>
        </div>
        <nav className='content-fluid bg-dark'>
          <div className=" row col-12 d-flex justify-content-center text-white">
            <h1 id='h2'>WOMEN</h1>
            <h4 className=' text-white row col-6'>"Style Is a Way To Say Who You Are Without Having To Speak"            </h4>
          </div>
        </nav>

        <div className='container-fluid'>
          <div className='row'>
            <div className="card col-12 col-sm-6 col-md-4 col-lg-3" >
              <img src="https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/25/28604/1.jpg?6034" width={310} height={310} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">₹ 1349</h5>
                
                <p className="card-text">Fashion Stylish Women Winter Coat Fur Collar Hooded Down Jacket Overknee Cotton Coat</p>
                
                <button  className="btn btn-primary" onClick={()=>navigate('/1')}>Order Now</button>
              </div>
            </div>

            <div className="card col-12 col-sm-6 col-md-4 col-lg-3"  >
              <img src="https://i.etsystatic.com/26424823/r/il/3600eb/2973610199/il_1080xN.2973610199_i2z5.jpg" width={310} height={310} alt="..." />
              <div className="card-body">
                <h5 className="card-title">₹ 5,695</h5>
                <p className="card-text">Soft Pure Organza Saree on blouse and Border,Indian saree,party wear saree,women dress,wedding clothing.</p>
                <button className="btn btn-primary" onClick={()=>navigate('/1')}>Order Now</button>
              </div>
            </div>
            <div className="card col-12 col-sm-6 col-md-4 col-lg-3"  >
              <img src="https://images.bewakoof.com/utter/content/2690/content_Shrug_with_jeans.jpg" width={310} height={310} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">₹599.00</h5>
                
                <p className="card-text">Regular casual Deal jeans Solid Polyester Crop Top Blue Tops with orange jearking tops.</p>
                
                
                <button  className="btn btn-primary" onClick={()=>navigate('/1')}>Order Now</button>
              </div>
            </div>
            <div className="card col-12 col-sm-6 col-md-4 col-lg-3" >
              <img src="https://i.etsystatic.com/21696882/r/il/f2a3f3/3882089204/il_794xN.3882089204_gxlk.jpg" width={310} height={310} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">₹ 1,741.00</h5>
                <p className="card-text">Traditional Designers Wedding Party Wear Heavy Cotton Printed Anarkali Kurti, Pant With Dupatta Set</p>
                <button  className="btn btn-primary" onClick={()=>navigate('/1')}>Order Now</button>
              </div>
            </div>
          </div>
        </div>

        <nav className='content-fluid bg-dark'>
          <div className=" row col-12 d-flex justify-content-center text-white">
            <h1 id='h2'>MEN</h1>
            <h4 className='text-white row col-6'>"Clothes make the man. Naked people have little or no influence on society."            </h4>
          </div>
        </nav>

        <div className='container-fluid'>
          <div className='row'>
            <div className="card col-12 col-sm-6 col-md-4 col-lg-3" >
              <img src="https://assets.ajio.com/medias/sys_master/root/20211218/lG7z/61bcfd18f997ddf8f1568c59/-288Wx360H-463516760-blue-MODEL.jpg" width={310} height={310} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">₹1,295</h5>
                
                <p className="card-text">NEMSSIS CHARKOAL Men's Club Wear Digitally Printed Slim fit Cotton Casual Shirt</p>
                
                <button  className="btn btn-primary" onClick={()=>navigate('/1')}>Order Now</button>
              </div>
            </div>

            <div className="card col-12 col-sm-6 col-md-4 col-lg-3"  >
              <img src="https://montecristomagazine.com/wp-content/uploads/2020/10/VancouverMenSuits-2.jpg" width={310} height={310} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">₹ 5,695</h5>
                
                <p className="card-text">House of Sensation Coat Pant & Waist Coat for Men Stylish Design Wedding, Daily Life.</p>
                <button  className="btn btn-primary" onClick={()=>navigate('/1')}>Order Now</button>
              </div>
            </div>
            <div className="card col-12 col-sm-6 col-md-4 col-lg-3"  >
              <img src="https://i.etsystatic.com/25566015/r/il/e7baff/3832558721/il_794xN.3832558721_4dst.jpg" width={310} height={310} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">₹ 5,602.00</h5>

                <p className="card-text">Handmade Elegant Maroon Velvet Nehru Modi Jacket with Kurta Pajama Set .</p>


                <button  className="btn btn-primary" onClick={()=>navigate('/1')}>Order Now</button>
              </div>
            </div>
            <div className="card col-12 col-sm-6 col-md-4 col-lg-3" >
              <img src="https://assets.ajio.com/medias/sys_master/root/20220819/XVug/62fe856aaeb269176183ef52/-473Wx593H-461124702-black-MODEL2.jpg" width={310} height={310} className="card-img-top" alt="..." />
              <div className="card-body">

                <h5 className="card-title">₹623.00</h5>
                
                <p className="card-text">INDIAN THREADS Mens Slim Fit Casual Shirt Mens Cotton Checkered Full Sleeves Shirt Regular Fit</p>
                
                <button  className="btn btn-primary" onClick={()=>navigate('/1')}>Order Now</button>
              </div>
            </div>
          </div>
        </div>

        









      </>

    );
  }

export default BackImage
