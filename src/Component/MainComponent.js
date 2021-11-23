import React from 'react';
import Header from './Header/Header'
import Body from './Body/Body'
import Footer from './Footer/Footer'
import Home from './Body/Home'
import AppFeature from './Body/AppFeature'
import Pricing from './Body/Pricing'
import CSatisfaction from './Body/CSatisfaction'
import AccordionPart from './Body/AccordionPart'
import Menubar from './Header/Menubar'
import { Redirect, Route, Switch } from 'react-router-dom';

const MainComponent = () => {
    return (
        <div>
        
       <Menubar> </Menubar>
    
        <Switch>
        <Route exact path='/home' render={props =>
        <div>
            <Body> </Body>
            <Footer> </Footer>
        </div>
        
        } />
        <Route exact path='/keyFeatures' component={AppFeature} />
        <Route exact path='/pricing' component={Pricing} />
        <Route exact path='/testimonial' component={CSatisfaction} />
        <Route exact path='/faq' component={AccordionPart} />
        <Redirect to="/home"> </Redirect>
        </Switch>
        
            
        </div>
    );
};

export default MainComponent;