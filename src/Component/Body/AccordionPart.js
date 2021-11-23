import React, { useEffect } from 'react';
import AccordionDesign from './AccordionDesign'
import AOS from "aos";
import "aos/dist/aos.css";
const AccordionPart = () => {
    useEffect(() => {
        AOS.init({
            duration: 1100,
             once:true
          })         
    })
    return (
        <div className='Accordionpart my-5 pt-4'>
        <div className='container'>
        <div className='row'>
        <div className='col-md-10 mx-auto'>

        <div className='row'>
        <div className='col-md-12 text-center'>

        <h2 data-aos="fade-down-right"> Frequently Asked Question </h2>
        <p className='lead' data-aos="fade-down-left"  data-aos-duration="2000"  data-aos-easing="ease-out-cubic">
         The rise of mobile devices transforms the way we consume infomation entirely <br />
        and the world's most elevant channels such as Facebook. </p>

        </div>

        <div className='col-md-12 col-12 mt-3' data-aos="zoom-out-left">
            <AccordionDesign> </AccordionDesign>
        </div>

        </div>

        </div>

        </div>

        </div>
            
        </div>
    );
};

export default AccordionPart;