import React from 'react';
import swimmingImage from "../../assets/swimming.png"
import classImage from "../../assets/class.png"
import playImage from "../../assets/playground.png"

const Qzone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='font-bold mb-5'> Q-zone </h2>
            <div className='space-y-5'>
                <img  className='w-full object-cover' src={swimmingImage} alt="" />
                <img  className='w-full object-cover' src={classImage} alt="" />
                <img  className='w-full object-cover' src={playImage} alt="" />
 
            </div>
            
        </div>
    );
};

export default Qzone;