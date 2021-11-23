import React,  { useEffect } from 'react';
import '../../CSS/Body.css'
import AOS from "aos";
import "aos/dist/aos.css";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import homeimg from '../../image/homeimg.png'
const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
             once:true
          })        
    })
    return (
        <div className='homePage mt-5 pt-4 '>
            <div className='container'>
                <div className='row'>
                <div className='col-md-10 mx-auto'>
                        <div className='row mx-auto'>
                        <div className='col-md-7 pt-5 mt-5'>
                              <h6 className='bg-dark heading'>
                                  <span>
                                  <CheckCircleOutlineIcon style={{backgroundColor: "yellow", fontSize:"30px", borderRadius:"30px"}}> </CheckCircleOutlineIcon>
                                  </span>
                                  <span className='pe-4 text-white'>  #1 Editors Choice App of 2021 </span>  
                              </h6> 
                              <h1 className='headingApp'> Best app for your </h1> 
                              <h1 className='headingApp'> modern lifestyle </h1>
                              <p className='lead my-3' data-aos="zoom-in-up"> Increase productivity with a simple to-do app. App for managing your personal budgets. </p>
                              <div className='pt-3'>
                              <button className='btn_get_started'> Try for free </button>
                              <h4 className='lead playVideo me-5'> <span> <PlayCircleFilledIcon> </PlayCircleFilledIcon> </span> Watch demo video </h4>
                              </div> 
                        </div>
                        <div className='col-md-5'>
                                <img src={homeimg} alt="" className='img-fluid vert-move' />
                        </div>

                        </div>
                </div>

                </div>
            </div>
        </div>
    );
};

export default Home;