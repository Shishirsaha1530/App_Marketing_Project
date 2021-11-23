import React , { useEffect } from 'react';
import AppFeatureData from './AppFeatureData'
import AppFeatureCard from './AppFeatureCard'
import featureimgtwo from '../../image/featureimgtwo.png'
import featureimgone from '../../image/featureimgone.png'
import '../../CSS/Body.css'
import AOS from "aos";
import "aos/dist/aos.css";
const AppFeature = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
             once:true
          })
          
    })
    return (
        <div className='appFeature my-4 pt-5'>
            <div className='container'>
            <div className='row'>
            <div className='col-md-12 mx-auto'>
                <div className='row'>
                <div className='col-md-6 col-12'>

                <h3 className='bold'>
                    Ultimate features <br />
                    that we built
                </h3>
                <p className='lead my-3' data-aos="fade-up"
     data-aos-duration="3000"> The rise of mobile devices transforms the way we <br />
                consume information entirely 
                </p>
                <div className='row'>
                <div className='col-md-12'>

                <div className='row'>
                {
                    AppFeatureData.map((feature)=>{
                        return (
                            <div className='col-md-6 col-6' data-aos="fade-down">
                            
                            <AppFeatureCard image={feature.image} title={feature.title}> </AppFeatureCard>
                             </div>
                        )
                    })
                }
                </div>

                </div>

                </div>

                {

                }
                <button className='btn_get_started mt-3'> See All </button>
                </div>
                <div className='col-md-6 col-12 mt-5 pt-3 mx-auto' data-aos="flip-right" data-aos-duration="3000">
              <div className='parent'>
              <img src={featureimgone} alt="" className='image1'/>
              <img src={featureimgtwo} alt="" className='image2' />
              </div>
                                 
                </div>

                </div>

            </div>
                 
            </div>

            </div>
        </div>
    );
};

export default AppFeature;