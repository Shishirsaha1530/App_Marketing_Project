import React from 'react';
import NetworkCard from './NetworkCard'
import NetworkData from './NetworkData'
const Network = () => {
    return (
        <div className='network my-5 bg-light'>
            <div className='container'>
            <div className='row '>
            <div className='col-md-10 col-10 mx-sm-auto mx-auto'>
            <div className='row'>
            {
                NetworkData.map((val)=>{
                    return (
                        <div className='col-md-4 col-6 mx-auto'> 
                        <NetworkCard image={val.img} title={val.title}> </NetworkCard>
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

export default Network;