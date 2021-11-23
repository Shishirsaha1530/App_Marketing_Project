import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
const YearlyPackage = () => {
    useEffect(() => {
        AOS.init({
            duration: 1100,
             once:true
          })         
    })
    return (
        <div className='container'>
           <div className="row">
            <div className="col-md-4 col-sm-6 offset-md-2" data-aos="fade-right">
                <div className="pricingTable ">
                    <div className="pricingTable-header">
                        <h3 className="title">Advance Class </h3>
                        <p > For big teams or office </p>
                    </div>
                    <div className="price-value">
                            <span className="amount">$200<span className='lead text-dark'>/year </span>   </span>
                        </div>
                    <ul className="pricing-content">
                        <li>Drag & Drop Builder</li>
                        <li>4000's of Templates </li>
                        <li>Blog Support Tools</li>
                        <li>eCommerce Store</li>
                        <li> Live Support and Maintainance </li>
                      
                    </ul>
                    <div className="pricingTable-signup">
                        <a href="#">Start free trial</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-sm-6" data-aos="fade-left">
                <div className="pricingTable blue ">
                    <div className="pricingTable-header">
                        <h3 className="title bold">Premium Version </h3>
                        <p> For Best Opportunities </p>
                    </div>
                    <div className="price-value">
                            <span className="amount">$499<span className='lead text-dark'>/year </span> </span>
                        </div>
                    <ul className="pricing-content">
                    <li>Drag & Drop Builder</li>
                        <li>5000's of Templates </li>
                        <li>Blog Support Tools</li>
                        <li>eCommerce Store</li>
                        <li> Live Support and Maintainance </li>
                        <li> Free Training on Business </li>
                    </ul>
                    <div className="pricingTable-signup">
                        <a href="#">Start free trial</a> 
                      
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default YearlyPackage;