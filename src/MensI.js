import React from 'react'

import { useNavigate } from 'react-router-dom'

export const MensI = () => {
    const navigate = useNavigate();
  return (
    <>
    <h1 className='fluid'>
                <nav className='bg-dark navbar'>
                    <div className=" row col-12 d-flex justify-content-center text-white">
                    <h1 id='h2'> Mens T-Shirt</h1>
                        
                    </div>
                </nav>
            </h1>
            <div className='container-fluid '>
                <div className='row'>
                    <div className="card col-12 col-sm-5 col-md-4 col-lg-3" >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-f8oF74AG6rI_dPNO4HhyfnUc1dCjTNLQ5PIIaxKUZEd0SuwnSWwK8NCe8GT3IsU-QJo&usqp=CAU" width={310} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"> ₹489.00</h5>
                            <p className="card-text">Jockey Men's Regular Fit Round Neck Half Sleeved T-Shirt.</p>
                            <button to='' className="btn btn-primary" onClick={()=>navigate('/1')}>Order Now</button>
                        </div>
                    </div>

                    <div className="card col-12 col-sm-6 col-md-4 col-lg-3" >
                        <img src="https://images.meesho.com/images/products/62961554/zfb37_512.jpg" width={310} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"> ₹1,049.00</h5>
                            <p className="card-text">Urbano Fashion Men's Black, Grey Round Neck Full Sleeve Cotton T-Shirt.</p>
                            <button to='' className="btn btn-primary" onClick={()=>navigate('/1')}>Order Now</button>
                        </div>
                    </div>
                    <div className="card col-12 col-sm-6 col-md-4 col-lg-3" >
                        <img src="https://w7.pngwing.com/pngs/549/191/png-transparent-t-shirt-sleeve-polo-shirt-clothing-shirt-tshirt-black-top.png" width={310} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">₹ 290.00</h5>
                            <p className="card-text">New Summer Style 3D T Shirt Skull HD Print Men Harajuku Short Sleeve Tee .</p>
                            <button to='' className="btn btn-primary" onClick={()=>navigate('/1')}>Order Now</button>
                        </div>
                    </div>
                    <div className="card col-12 col-sm-6 col-md-4 col-lg-3" >
                        <img src="https://5.imimg.com/data5/MB/BA/MY-47744188/160-gsm-blank-plain-custom-round-neck-t-shirts-500x500.png" width={310} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"> ₹899.00</h5>
                            <p className="card-text">Style Eva - White Polyester | 252 - |Printed Short Sleeve V Neck T-Shirt.</p>
                            <button to='' className="btn btn-primary" onClick={()=>navigate('/1')}>Order Now</button>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className='fluid'>
                <nav className='bg-dark navbar'>
                    <div className=" row col-12 d-flex justify-content-center text-white">
                        <h1 id='h2'>Party Wear</h1>
                        <h4 className=' text-white row col-3 '>
                        </h4>
                    </div>
                </nav>
            </h1>
            <div className='container-fluid '>
                <div className='row'>
                    <div className="card col-12 col-sm-6 col-md-4 col-lg-3" >
                        <img src="https://i.pinimg.com/736x/22/03/55/220355a4b899144b48e309dde11cd54a.jpg" width={310} height={415} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">₹ 2,700</h5>
                            <p className="card-text">New Ethnic Stylish Ethnic Designer Banarasi silk Kurta Pajama For Men.LK-05 </p>
                            <button to='' className="btn btn-primary" onClick={()=>navigate('/1')}>Order /now</button>
                        </div>
                    </div>

                    <div className="card col-12 col-sm-6 col-md-4 col-lg-3" >
                        <img src="https://img0.junaroad.com/uiproducts/17594317/zoom_0-1615473008.jpg" width={310} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">₹1,499.00</h5>
                            <p className="card-text"> PAROKSH Men's Peacock Blue Handloom Cotton Long Ethnic Kurta white.</p>
                            <button to='' className="btn btn-primary" onClick={()=>navigate('/1')}>Order Now</button>
                        </div>
                    </div>
                    <div className="card col-12 col-sm-6 col-md-4 col-lg-3" >
                        <img src="https://5.imimg.com/data5/ANDROID/Default/2022/8/SQ/HO/OX/153990963/product-jpeg-500x500.jpg" width={310} height={415} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">₹379.00</h5>
                            <p className="card-text">Luckwin Mens Cotton Blend Self White Self Design Kurta Pyjama Set[3 Varients].</p>
                            <button to='' className="btn btn-primary" onClick={()=>navigate('/1')}>Order Now</button>
                        </div>
                    </div>
                    <div className="card col-12 col-sm-6 col-md-4 col-lg-3" >
                        <img src="https://d2wvwvig0d1mx7.cloudfront.net/data/org/194/media/img/cache/0x500/2563967_0x500.jpg" width={310} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">₹360.00</h5>
                            <p className="card-text">See Designs Men's Cotton Kurta Pyjama (SDMDWKT30101XS_Maroon_Xs). </p>
                            <button to='' className="btn btn-primary" onClick={()=>navigate('/1')}>Order Now</button>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className='fluid'>
                <nav className='bg-dark navbar'>
                    <div className=" row col-12 d-flex justify-content-center text-white">
                        <h1 id='h2'>Formal Wear</h1>
                        <h4 className=' text-white row col-3 '>
                        </h4>
                    </div>
                </nav>
            </h1>

            <div className='container-fluid '>
                <div className='row'>
                    <div className="card col-12 col-sm-5 col-md-4 col-lg-3" >
                        <img src="https://i.pinimg.com/736x/8e/0f/9b/8e0f9b2ce1128f8487c60761a16d7ea0.jpg" width={310} height={395} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">₹899.00</h5>
                            <p className="card-text">IndoPrimo Men's Regular Fit Cotton Casual Shirt for Men.</p>
                            <button to='' className="btn btn-primary" onClick={()=>navigate('/1')}>Order Now</button>
                        </div>
                    </div>

                    <div className="card col-12 col-sm-5 col-md-4 col-lg-3 " >
                        <img src="https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&w=1000&q=80" width={310} height={395}  alt="" />
                        <div className="card-body">
                            <h5 className="card-title">₹999.00</h5>
                            <p className="card-text">WYC Men's Solid Slim Fit Shirts/Casual Denim Shirt for Men.</p>
                            <button to='' className="btn btn-primary" onClick={()=>navigate('/1')}>Order Now</button>
                        </div>
                    </div>
                    <div className="card col-12 col-sm-5 col-md-4 col-lg-3" >
                        <img src="https://images-eu.ssl-images-amazon.com/images/I/51a2Kbj2MWL._AC._SR360,460.jpg" width={310}  className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">₹1,230.00</h5>
                            <p className="card-text">BREGEO Men's Slim Fit Single Breasted Blazer.</p>
                            <button to='' className="btn btn-primary" onClick={()=>navigate('/1')}>Oeder Now</button>
                        </div>
                    </div>
                    <div className="card col-12 col-sm-5 col-md-4 col-lg-3" >
                        <img src="https://m.media-amazon.com/images/I/51MascbtUZL._UL1100_.jpg" width={310} height={395} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"> ₹ 1329.00</h5>
                            <p className="card-text">Mens Beige Three Piece Suit 2 Piece Textured Men Suit.</p>
                            <button to='' className="btn btn-primary" onClick={()=>navigate('/1')}>Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}
