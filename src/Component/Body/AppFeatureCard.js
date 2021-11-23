import React from 'react';
import '../../CSS/Body.css'
const AppFeatureCard = (props) => {
    return (
        <div className='mt-4 '>
        <div className="card border-0 pt-4 chooseCard ">
     
        <img src={props.image} className="card-img-top ps-3 featureImg  img-fluid " alt="..."/>
     
<div className="card-body ">
<h5> {props.title} </h5>
<p className="card-text feature_text">
   Get your blood tests delivered at <br /> home collect a sample from the <br /> news your blood tests
</p>
</div>
</div>
   </div>
    );
};

export default AppFeatureCard;