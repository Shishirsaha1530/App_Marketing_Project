import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
const MonthlyPackage = () => {
    useEffect(() => {
        AOS.init({
            duration: 1100,
             once:true
          })         
    })
    return (
        <div className='container pt-3'>
        <div className="row">
         <div className="col-md-4 col-sm-6 offset-md-2" data-aos="fade-right" >
             <div className="pricingTable">
                 <div className="pricingTable-header">
                     <h3 className="title">Business Class </h3>
                     <p > For small teams or office </p>
                 </div>
                 <div className="price-value">
                         <span className="amount">$0<span className='lead text-dark'>/month </span>   </span>
                     </div>
                 <ul className="pricing-content">
                     <li>Drag & Drop Builder</li>
                     <li>1000's of Templates </li>
                     <li>Blog Support Tools</li>
                     <li>eCommerce Store</li>
                   
                 </ul>
                 <div className="pricingTable-signup">
                     <a href="#">Start free trial</a>
                 </div>
             </div>
         </div>
         <div className="col-md-4 col-sm-6" data-aos="fade-left">
             <div className="pricingTable blue">
                 <div className="pricingTable-header">
                     <h3 className="title bold">Pro Master </h3>
                     <p> For Best Opportunities </p>
                 </div>
                 <div className="price-value">
                         <span className="amount">$99<span className='lead text-dark'>/month </span> </span>
                     </div>
                 <ul className="pricing-content">
                 <li>Drag & Drop Builder</li>
                     <li>1000's of Templates </li>
                     <li>Blog Support Tools</li>
                     <li>eCommerce Store</li>
                 </ul>
                 <div className="pricingTable-signup">
                     <a href="#">Start free trial</a> 
                     <h5 className='orOption mt-3'> or Start 14 days trial   </h5>
                 </div>
             </div>
         </div>
     </div>
     </div>
    );
};

export default MonthlyPackage;