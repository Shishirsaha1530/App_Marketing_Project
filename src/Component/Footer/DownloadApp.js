import React, { useEffect } from 'react';
import downTwo from '../../image/FooterI/downTwo.png'
import downOne from '../../image/FooterI/downOne.png'
import downThree from '../../image/FooterI/downThree.png'
import '../../CSS/Footer.css'
import AOS from "aos";
import "aos/dist/aos.css";
const DownloadApp = () => {
    useEffect(() => {
        AOS.init({
            duration: 1100,
             once:true
          })         
    })
    return (
        <div className='container pt-4'>

        <div className='row'>

        <div className='col-md-12 col-12 mx-auto mx-sm-auto'>

        <div className='row'>
        <div className='col-md-6 col-12 pt-4' data-aos="fade-right">
            <h2>Download our App now !</h2>
            <p className='py-2' >The rise of mobile devices transforms the way we consume information entirely
and the world's most elevant channels such as Facebook.</p>

<img src={downTwo} alt="" className='downImg' />
<img src={downOne} alt="" className='downImg mx-3' />
        </div>
        <div className='col-md-6 col-12' data-aos="fade-left">
        <img src={downThree} alt="" className='img-fluid mt-5 mt-md-0 ' />

        </div>

        </div>

        </div>

       

        </div>
            
        </div>
    );
};

export default DownloadApp;