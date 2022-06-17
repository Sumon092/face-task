import React from 'react';
import ErrorImage from './assets/home/5203299.jpg'

const NotFound = () => {
    return (
        <div className='flex justify-center align-center h-screen'>
            <div>
                <img className='w-full h-screen' src={ErrorImage} alt="" />
            </div>
        </div>
    );
};

export default NotFound;