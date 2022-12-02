import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='content'>
                <p>LAKE OF DREAMS</p>
                <p>WINTER RETREATS SIGNUP OPEN</p>
                <button href='/' className='button'>Retreat Signup</button>
            </div>
        </div>
    )
}

export default Hero
