import React from 'react';
import socialImg from '../../image/FooterI/socialImg.png'
import '../../CSS/Footer.css'
const CopyFooter = () => {
    return (
        <div className='footerSection '>
            <div className='row'>
            <div className=' col-md-4 offset-0 offset-md-4 text-center'>
            <h2 className='footerCap py-4'> App<span className='footerSpan'>Lab</span>  </h2>

            <div className='foterMenu'>

            <ul>
                <li> Home </li>
                <li> Key Features </li>
                <li> Pricing </li>
                <li> Testimonial </li>
                <li> FAQ </li>
            </ul>

            </div>

            <img src={socialImg} alt="" className='img-fluid my-4 pb-3' />

            <p className='ms-5 ps-2' style={{color: 'white'}} >Copyright© Shishir Saha 2021. All rights reserved</p>

            </div>

            </div>
        </div>
    );
};

export default CopyFooter;