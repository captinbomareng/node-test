import React from 'react';
import "./styles.css";
import {animate, motion, useAnimation} from 'framer-motion';

const navAnomation ={
    initial:{
        x:-window.innerWidth,

    },
    animate:(custom)=>({
        x:0,
        transition:{
            duration:2,
            delay: custom *0.2
        } 
    })
}

function Navigation() {  
    return (
        <div className='nav-container'>
            <motion.div  initial='initial' animate='animate' variants={navAnomation} className='nav-bg' custom={0}/>
            <motion.div  initial='initial' animate='animate' variants={navAnomation} className='nav-bg' custom={1} />
            <motion.div  initial='initial' animate='animate' variants={navAnomation} className='nav-bg' custom={2} />
            <motion.div  initial='initial' animate='animate' variants={navAnomation} className='nav-bg' custom={3} />                             
        </div>
    )
}

export default Navigation;
