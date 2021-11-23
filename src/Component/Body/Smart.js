import React, { useEffect } from 'react';
import '../../CSS/Body.css'
import AOS from "aos";
import "aos/dist/aos.css";
const Smart = () => {
    useEffect(() => {
        AOS.init({
             once:true
          })        
    })
    return (
        <div className='Smart_jackpot my-4'>
        <div className='container'>
        <div className='row '>
<div className='col-md-10 mx-auto'>
<div className='row'>
<div  className='col-md-6 col-6  jackpots' data-aos="flip-left" data-aos-duration="1200">
<h2 className='smart_title'> Smart jackpots that <br /> you may love this <br /> anytime & anywhere </h2>
</div>
<div className='col-md-6 col-6' data-aos="flip-right" data-aos-duration="1900">
<p className='smart_text lead'> The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as facebook.  </p>
</div>
</div>

</div>
        </div>

        </div>
            
        </div>
    );
};

export default Smart;