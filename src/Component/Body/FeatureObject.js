import React from 'react';
import '../../CSS/Body.css'
const FeatureObject = (props) => {
    return (
        <div>
                <div>
                <div class="d-flex">
  <div class="flex-shrink-1">
    <img src={props.image} alt="..." className='awesomeIMg'/>
  </div>
  <div class="flex-grow-1 ms-4">
   <h4 >  {props.title} </h4>
   <p className='lead'> Get your blood tests delivered at home collect a sample from the news your blood tests.</p>
  </div>
</div>

                </div>
             
        </div>
    );
};

export default FeatureObject;