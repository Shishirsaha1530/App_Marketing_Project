import React, { useEffect } from 'react';
import ChooseData from './ChooseData'
import ChooseCard from './ChooseCard'
import AOS from "aos";
import "aos/dist/aos.css";
const Choose = () => {
    useEffect(() => {
        AOS.init({
            duration: 1100,
             once:true
          })         
    })
    return (
        <div className='ReasonForChoosing my-5 py-3'>
        <div className='container'>
        <div className='row'>
        <div className='col-md-10 mx-auto'>
        <div className='row'>
        <div className='col-md-12 text-center'>
        <h3 className='bolder' data-aos="fade-right">
                Why you should choose <br />
                our app
            </h3>
            <p className='lead mt-3' data-aos="flip-right" data-aos-duration="3000">
            The rise of mobile devices transforms the way we consume information entirely <br /> and the world's most elevant channels such as Facebook
            </p>
        </div>

        </div>

        <div className='row'>
        {
            ChooseData.map((item)=>{
                return (
                    <div className='col-md-4 col-6' data-aos="fade-down"> 
                       <ChooseCard title={item.title} image={item.image} > </ChooseCard>        
                 </div>
                )
               
            }) 

        }

        </div>

        </div>
             
        </div>
             
        </div>
            
        </div>
    );
};

export default Choose;