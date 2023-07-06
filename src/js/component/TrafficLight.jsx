import React from 'react';
import {useState} from 'react';



function TrafficLight (){ 
    const [color, setColor] = useState ("null");
    const glowLight =(light) =>{
        setColor(light);
    };
    return (
        <div className='body-light'>
        <div className='traffic-light'>
            <div className={`light red }  ${color ==='red' ? 'active' : ''} `}   onClick = {()=>glowLight('red')}></div>
            <div className={`light yellow ${color ==='yellow' ? 'active' : ''}`}   onClick = {()=>glowLight('yellow')}></div>
            <div className={`light green ${color ==='green' ? 'active' : ''}`}   onClick = {()=>glowLight('green')}></div>
        </div>
        </div>
    );
};

export default TrafficLight;

