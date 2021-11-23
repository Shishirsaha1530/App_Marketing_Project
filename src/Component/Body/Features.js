import React , { useEffect }  from 'react';
import awesome from  '../../image/AwesomeAppImg.png'
import FData from './FData'
import FeatureObject from './FeatureObject'
import '../../CSS/Body.css'
import AOS from "aos";
import "aos/dist/aos.css";
const Features = () => {
    useEffect(() => {
        AOS.init({
            duration: 1100,
             once:true
          })
          
    })
    return (
        <div className='Awesome_Features bg-light mt-5 '>
            <div className='container'>
                <div className='row'>
                    <div  className='col-md-10 mx-auto'>
                        <div className='row'>
                            <div className='col-md-6 col-12' data-aos="fade-up-right">
                            <img src={awesome} alt="" className='vert-move img-fluid'  />
                            </div>
                            <div className='col-md-6 col-12 mt-5 pt-3' data-aos="fade-up-left">
                            <h2 className='awesomeTitle'> Awesome apps <br /> features </h2>
                        <p className='pb-3'> Increase productivity with a simple to-do app. App for managing your personal budgets. </p>    
                            {
                                    FData.map((val)=>{
                                        return (                                            
                                            <div class="d-flex flex-column bd-highlight mb-3">
<FeatureObject image={val.img} title={val.title}> </FeatureObject>
                                             </div> 
                                                       
                                        )
                                    }) 
                                }                           
                             </div>                             
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;