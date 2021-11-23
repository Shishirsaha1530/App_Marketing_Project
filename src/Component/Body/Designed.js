import React, { useEffect } from 'react';
import design from '../../image/designed.png'
import '../../CSS/Body.css'
import AOS from "aos";
import "aos/dist/aos.css";
const Designed = () => {
    useEffect(() => {
        AOS.init({
             once:true
          })         
    })
    return (
        <div className='designpage my-4'>
            <div className='container'>
            <div className='row'>
            <div className='col-md-12 '>
            <div className='row'>
            <div className='col-md-5 col-12' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                    <img src={design} alt=""  className='img-fluid vert-move'   />
            </div>
                <div className='col-md-5 col-12 pt-5 mx-auto bold'>
                    <h2 className='me-3' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                        Designed & built by <br />
                        the latest code <br />
                        integration
                    </h2>
                    <p className='my-3 lead' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    The rise of mobile devices transforms the way we <br />
                    consume information entirely and the world's most <br />
                    elevant channels such as Facebook.  
                    </p>
                    <button className='btn_get_started'> Learn More </button>
                </div> 
            </div>
                 
            </div>
                 
            </div>
                 
            </div>
        </div>
    );
};

export default Designed;