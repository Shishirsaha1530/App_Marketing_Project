import React, { useEffect } from 'react';
import '../../CSS/Body.css'
import AOS from "aos";
import "aos/dist/aos.css";
const NetworkCard = (props) => {
    useEffect(() => {
        AOS.init({
            duration: 1100,
             once:true
          })
          
    })
    return (
        <div>
            <div className="card border-0 bg-light pt-4" data-aos="zoom-out-right">
  <img src={props.image} className="card-img-top network_img img-fluid mx-3 " alt="..."/>
  <div className="card-body">
  <h5> {props.title} </h5>
    <p className="card-text" data-aos="zoom-out-left">
        Get your blood tests delivered at home collect a sample from the news your blood tests
    </p>
  </div>
</div>
        </div>
    );
};

export default NetworkCard;