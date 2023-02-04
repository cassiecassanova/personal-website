import React from 'react';
import NavigationBar from './components/NavigationBar';
import Image from './assets/Cassie.png'
import './Homepage.css'
import {CSSTransition} from 'react-transition-group'; 

function Homepage(){
    return(
        <div>
            <div className='Navigation'>
                <NavigationBar />
            </div>
            <div className='Homepage-HelloWorld'>
                <h1>Hello World</h1>
            </div>
            <div className='profile'>
                <img 
                className='profile-image'
                src={Image}
                ></img>
            </div>
            <div className='Homepage-Greeting'>
                <h1>Welcome to my Site</h1>
            </div>
        </div>  
    )
}

export default Homepage;