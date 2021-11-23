import React from 'react';
import '../../CSS/Body.css'
const ChooseCard = (props) => {
    return (
        <div className='mt-4 '>
             <div className="card border-0 pt-4 chooseCard ">
  <img src={props.image} className="card-img-top chooseImg mx-auto " alt="..."/>
  <div className="card-body ">
  <h5 className='mx-auto text-center'> {props.title} </h5>
    <p className="card-text">
        Get your blood tests delivered at <br /> home collect a sample from the <br /> news your blood tests
    </p>
  </div>
</div>
        </div>
    );
};

export default ChooseCard;