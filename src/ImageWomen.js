import React from 'react'

import { useNavigate } from 'react-router-dom'

export const ImageWomen = () => {
    const navigate= useNavigate();

    return (
        <>

            <h1 className='fluid'>
                <nav className='bg-dark navbar'>
                    <div className=" row col-12 d-flex justify-content-center text-white">
                    <h1 id='h2'>Casual Wear</h1>
                        
                    </div>
                </nav>
            </h1>
            <div className='container-fluid '>
                <div className='row'>
                    <div className="card col-12 col-sm-5 col-md-4 col-lg-3" >
                        <img src="https://i.pinimg.com/736x/8d/02/50/8d0250ccb9a95a67b8ca394de1e7a4f7.jpg" width={310} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"> ₹489.00</h5>
                            <p className="card-text">Indian Handicraft Cotton Women Casual Kerala style kurta Colour Size-Free Size.</p>
                            <button to='' className="btn btn-primary" onClick={()=>navigate('/1')}>Order Now</button>
                        </div>
                    </div>

                    <div className="card col-12 col-sm-6 col-md-4 col-lg-3" >
                        <img src="https://media.glamour.com/photos/5a135736081e4d296f18fc38/1:1/w_354%2Cc_limit/caroline-issa-milan-fahsion-week-2017-getty.jpg" width={310} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"> ₹1,049.00</h5>
                            <p className="card-text">Beautiful stylish woman. Fashion outfit, autumn trend. Young casual brunette walking by cars in street.</p>
                            <button to='' className="btn btn-primary" onClick={()=>navigate('/1')}>Order Now</button>
                        </div>
                    </div>
                    <div className="card col-12 col-sm-6 col-md-4 col-lg-3" >
                        <img src="https://5.imimg.com/data5/IOS/Default/2021/9/AA/MI/EO/89485864/product-jpeg-500x500.png" width={310} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">₹ 290.00</h5>
                            <p className="card-text">Ladies Winter Jackets M Size, Casual Wear Dressing Design Disclaimer Under Section .</p>
                            <button to='' className="btn btn-primary" onClick={()=>navigate('/1')}>Order Now</button>
                        </div>
                    </div>
                    <div className="card col-12 col-sm-6 col-md-4 col-lg-3" >
                        <img src="https://40plusstyle.com/wp-content/uploads/2022/01/annettebeltedtop.jpg" width={310} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"> ₹899.00</h5>
                            <p className="card-text">Top trendy and attractive ladies shirts designs and ideas and  Fashion World.</p>
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
                        <img src="https://cpimg.tistatic.com/06392088/b/4/Ladies-One-Piece-Dress.jpg" width={310} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">₹ 2,700</h5>
                            <p className="card-text">Free Size Blue Designer Party Wear Dress </p>
                            <button to='' className="btn btn-primary" onClick={()=>navigate('/1')}>Order /now</button>
                        </div>
                    </div>

                    <div className="card col-12 col-sm-6 col-md-4 col-lg-3" >
                        <img src="https://5.imimg.com/data5/SELLER/Default/2020/11/QG/XD/ZR/12165078/ladies-party-wear-one-piece-dress-1000x1000.jpg" width={310} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">₹1,499.00</h5>
                            <p className="card-text"> Dresses exclusive suits & gown for Womens and Girls</p>
                            <button to='' className="btn btn-primary" onClick={()=>navigate('/1')}>Order Now</button>
                        </div>
                    </div>
                    <div className="card col-12 col-sm-6 col-md-4 col-lg-3" >
                        <img src="https://cdn.shopify.com/s/files/1/0637/4834/1981/products/maroon-lucknowi-chikankari-rayon-partywear-gown-peachmode-1.jpg?v=1669036948" width={310} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">₹379.00</h5>
                            <p className="card-text">Dresses for women western wear one piece dress for girls .</p>
                            <button to='' className="btn btn-primary" onClick={()=>navigate('/1')}>Order Now</button>
                        </div>
                    </div>
                    <div className="card col-12 col-sm-6 col-md-4 col-lg-3" >
                        <img src="https://cdn3.mydukaan.io/app/image/700x700/?url=https://dukaan-us.s3.amazonaws.com/4246537/f121de3a-9bc6-4777-920f-3a12561e2209/1630166768607-d29deef5-86eb-4eb2-a888-d80c59256753.jpeg" width={310} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">₹360.00</h5>
                            <p className="card-text">Sheetal Associates Women's A-Line Maxi Dress. </p>
                            <button to='' className="btn btn-primary" onClick={()=>navigate('/1')}>Order Now</button>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className='fluid'>
                <nav className='bg-dark navbar'>
                    <div className=" row col-12 d-flex justify-content-center text-white">
                        <h1 id='h2'>Saree</h1>
                        <h4 className=' text-white row col-3 '>
                        </h4>
                    </div>
                </nav>
            </h1>

            <div className='container-fluid '>
                <div className='row'>
                    <div className="card col-12 col-sm-6 col-md-4 col-lg-3" >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGODHTxaZ9mgDqpgabYDXww24zcROSgK1PcQ&usqp=CAU" width={310} height={400} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">₹899.00</h5>
                            <p className="card-text">SilverStar Women's Chanderi Cotton Saree With Blouse Piece (SSS1756_Yellow).</p>
                            <button to='' className="btn btn-primary" onClick={()=>navigate('/1')}>Order Now</button>
                        </div>
                    </div>

                    <div className="card col-12 col-sm-6 col-md-4 col-lg-3" >
                        <img src="https://rukminim1.flixcart.com/image/612/612/l29c9e80/sari/z/l/f/free-gp-niyami-peach-art-silk-designer-bollywood-fashion-style-original-imagdmze7sgef69s.jpeg?q=70" width={310} height={395}  alt="" />
                        <div className="card-body">
                            <h5 className="card-title">₹999.00</h5>
                            <p className="card-text">VAIVIDHYAM Women's Jacquard Cotton Silk Saree With Blouse Piece (saree for womens).</p>
                            <button to='' className="btn btn-primary" onClick={()=>navigate('/1')}>Order Now</button>
                        </div>
                    </div>
                    <div className="card col-12 col-sm-6 col-md-4 col-lg-3" >
                        <img src="https://cdn.shopify.com/s/files/1/0503/7303/4147/products/KP-3032_3_450x577_crop_center.jpg?v=1660712379" width={310}  className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">₹1,230.00</h5>
                            <p className="card-text">Applix Style Women's Soft Lichi Silk Saree With Blouse Piece Border Color: Red.</p>
                            <button to='' className="btn btn-primary" onClick={()=>navigate('/1')}>Oeder Now</button>
                        </div>
                    </div>
                    <div className="card col-12 col-sm-6 col-md-4 col-lg-3" >
                        <img src="https://images.meesho.com/images/products/28726556/dec92_512.jpg" width={310} height={400} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"> ₹ 1329.00</h5>
                            <p className="card-text">Hinfy Export Women's Cotton Silk Under 299 2022 Saree With Blouse Piece.</p>
                            <button to='' className="btn btn-primary" onClick={()=>navigate('/1')}>Order Now</button>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
