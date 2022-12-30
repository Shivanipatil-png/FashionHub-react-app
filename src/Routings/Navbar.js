import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <>

            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <div className='image-item'>
                        <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSFT-trZ8Ifa1YWM9grYxc8Mjpm4zvYJr4hw&usqp=CAU'} width={70} height={60} />
                    </div>
                    <Link className="navbar-brand text-light ms-2" to="#">FASION HUB</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse  " id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            
                            <li className="nav-item">
                                <Link className="nav-link active text-light" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/kids">Kids</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/women">Women</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link className="nav-link Men text-light" to="/men">Men</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/about">About</Link>
                            </li>
                            <form className="d-flex  ms-5" role="search">
                                <input className="form-control me-3" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>

                        </ul>

                    </div>
                </div>
            </nav>

        </>
    )
}
