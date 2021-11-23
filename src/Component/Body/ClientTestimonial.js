import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import testImgOne from '../../image/testImgOne.png'
import testimgtwo from '../../image/testimgtwo.png'
import testimgthree from '../../image/testimgthree.png'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
const ClientTestimonial = () => {
    const [value, setValue] = React.useState(5);
    const [count, setCount] = React.useState(0);
    const components = [
        <div>      
        <Box component="fieldset" mb={2} borderColor="transparent">
            <Rating name="read-only" value={value} readOnly />
      </Box>  
      <h3 > User Friendly & Customizable </h3>
      <p className='cspara my-3'> Bring to the table win-win survival strategies to ensure proactive domi-
      <br /> nation. At the end of the day, going forward, a new normal that has <br />
       evolved from generation X is on the runway heading towards a <br />
        streamlined cloud solution. User generated content in real-time will <br />
         have multiple touchpoints for offshoring. </p>
       
<div class="d-flex pt-3">
  <img
    src={testImgOne}
    alt="John Doe"
    className="me-3  testImgOne"/>
  <div>
    <h5 class="fw-bold"> Zoltan Nemeth  </h5>
    <p>
      CEO of Pixler Lab
    </p>
  </div>
</div>   
         </div>,

        <div> <Box component="fieldset" mb={2} borderColor="transparent">
        <Rating name="read-only" value={value} readOnly />
  </Box>  
  <h3 > Very Easy to Use and Helpful Apps </h3>
  <p className='cspara my-3'> "Really loved using the apps. It was user friendly and very helful apps for our daily life" </p>
   
<div class="d-flex pt-3">
<img
src={testimgtwo}
alt="John Doe"
className="me-3  testImgOne"/>
<div>
<h5 class="fw-bold"> Sarah Mahbub </h5>
<p>
  CEO of UYlab IT
</p>
</div>
</div></div>,
        <div> 
          <div> <Box component="fieldset" mb={2} borderColor="transparent">
        <Rating name="read-only" value={value} readOnly />
  </Box>  
  <h3 > One of the Best App </h3>
  <p className='cspara my-3'> "One of the best app I have ever used. Looking forward to see more good features in upcoming updates" </p>
   
<div class="d-flex pt-3">
<img
src={testimgthree}
alt="John Doe"
className="me-3  testImgOne"/>
<div>
<h5 class="fw-bold"> Zara Rahman </h5>
<p>
  System Analyst of Binary IT
</p>
</div>
</div></div>       
        </div>,      
    ]
    return (
        <div>

         {
             
            components[count]
        }

        <div className='mt-3'>
        {count > 0 && <ArrowBackIcon className='testBtn' onClick={() => setCount(count - 1)}> </ArrowBackIcon>}
        {count < components.length - 1 && <ArrowForwardIcon className='testBtn' onClick={() => setCount(count + 1)}> </ArrowForwardIcon>}
        </div>

      
            
        </div>
    );
};

export default ClientTestimonial;