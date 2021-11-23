import React, { useState, useEffect } from 'react';
import MonthlyPackage from './MonthlyPackage'
import YearlyPackage from './YearlyPackage'
import '../../CSS/Body.css'
import AOS from "aos";
import "aos/dist/aos.css";
const Pricing = () => {
    useEffect(() => {
        AOS.init({
            duration: 1100,
             once:true
          })         
    })
    let [show, setShow] = useState(true)
    let [showw, setShoww] = useState(false)
    let monthly=()=>{
        setShow(true)
        setShoww(false)
    }
    let yearly =()=>{
        setShoww(!false)
        setShow(!true)
    }
    return (
        <div className='pricingpage pt-5' >
        <div className='container'>
        <div className='row pt-4'>
        <div className='col-md-10 mx-auto'>
        <div className='row'>
        <div className='col-md-12 col-12 text-center '>

        <h3 data-aos="zoom-in">Get awesome features, without <br /> extra charges </h3>
        <p className='lead py-3' data-aos="zoom-in-up"> The rise of mobile devices transforms the way we consume information entirely <br /> 
        and the world's most elevant channels such as Facebook.
         </p>
       
  
            <div class="radio-button">
                <input onClick={monthly} type="radio" name="gender1" id="gender1" checked  />
                <label for="gender1">Monthly</label>
                <input onClick={yearly} type="radio" name="gender1" id="gender2"  />
                <label for="gender2">Annually</label>
            </div>

       
        </div>

        </div>

        </div>
             
        </div>

        </div>

        <div className='row mt-3'>
            <div className='col-md-10 mx-auto'>
            {
                show?<MonthlyPackage/>:null
            }
        </div>

            </div>

           


<div className='row mt-3'>
<div className='col-md-10 mx-auto'>
{
                showw? <YearlyPackage/> : null 
            }
</div>

</div>
            
        </div>
    );
};

export default Pricing;