import React, { useEffect } from 'react';
import CS1 from '../../image/CSImg/CS1.png'
import CS2 from '../../image/CSImg/CS2.png'
import CS3 from '../../image/CSImg/CS3.png'
import CS4 from '../../image/CSImg/CS4.png'
import CS5 from '../../image/CSImg/CS5.png'
import CS6 from '../../image/CSImg/CS6.png'
import CS7 from '../../image/CSImg/CS7.png'
import ClientTestimonial from './ClientTestimonial'
import AOS from "aos";
import "aos/dist/aos.css";
const CSatisfaction = () => {
    useEffect(() => {
        AOS.init({
            duration: 1100,
             once:true
          })         
    })
    return (
        <div className='customerSatisfaction my-4 pt-5'>   
        <div className='row'>
        <div className='col-md-7 col-12 CSatisBg mt-5 d-none d-md-block' data-aos="fade-up-right">
    <img src={CS1} alt="" className='img-fluid csOne' />
    <img src={CS3} alt="" className='img-fluid csTwo' /> <br />
    <img src={CS2} alt="" className='img-fluid csThree' />
    <img src={CS5} alt="" className='img-fluid csFour' />
    <img src={CS4} alt="" className='img-fluid csFive' />
    <img src={CS6} alt="" className='img-fluid csSix' />
    <img src={CS7} alt="" className='img-fluid csSeven' />
        </div>
        <div className='col-md-5 col-12 mx-auto' data-aos="fade-up-left">
        <h3> Meet Client Satisfaction <br /> by using product </h3>
        <p className=' my-3'> The rise of mobile devices transforms the way we consume.
         <br /> elevant channel such as Facebook   </p>
            <ClientTestimonial> </ClientTestimonial>    
    </div>
        </div>
            
        </div>
    );
};

export default CSatisfaction;