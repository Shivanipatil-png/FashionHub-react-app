import React from 'react'
import { Link } from 'react-router-dom'
import {BackImage} from '../BackImage';
import { Footer } from '../Footer';
import { Navbar } from './Navbar';


export const Home = () => {
    return (
        <>
            <Navbar />
            <div className='bg bg-expand-lg'>
                <div className='row col-12 d-flex justify-content-center'>
                    <img src='https://thumbs.dreamstime.com/b/creative-fashion-designer-table-top-view-personal-creative-fashion-designer-workspace-top-view-fabric-various-tools-109269069.jpg' className='img' ></img>
                </div>
            </div>
            <BackImage/>
            <Footer />


        </>
    )
}
