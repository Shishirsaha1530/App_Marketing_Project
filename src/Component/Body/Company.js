import React , { useEffect }  from 'react';
import '../../CSS/Body.css'
import one from '../../image/comOne.png'
import two from '../../image/comTwo.png'
import three from '../../image/comThree.png'
import four from '../../image/comFour.png'
import five from '../../image/comFive.png'
import AOS from "aos";
import "aos/dist/aos.css";
const Company = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
             once:true
          })
          
    })
    return (
        <div className='trusted_by_companies my-5 pt-3'>
             <div className='container'>
            <div className='row'>
                <div className='col-md-10 mx-auto'>
               
                        <div className='row mb-4 '>
                            <div className='col-md-12  text-dark text-center'>
                                <h6 className='trusted_companies'> Trusted by the Companies Like  </h6>
                            </div>
                        </div>
                        <div className='row mx-auto g-3' data-aos="flip-left">
                            <div className='col-md-2 col-4 mx-auto  '>
                                <img src={one} alt="" className='img-fluid trusted_img1'/>
                            </div>
                            <div className='col-md-2 col-4 mx-auto  '>
                                <img src={two} alt="" className='img-fluid trusted_img2'/>
                            </div>
                            <div className='col-md-2 col-4  mx-auto '>
                                <img src={three} alt="" className='img-fluid trusted_img3'/>
                            </div>
                            <div className='col-md-2 col-4  mx-auto  '>
                                <img src={four} alt="" className='img-fluid trusted_img4'/>
                            </div>
                            <div className='col-md-2 col-4  mx-auto '>
                                <img src={five} alt="" className='img-fluid trusted_img5'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Company;