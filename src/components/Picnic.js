import React from 'react'
import front from './images/front.png'
import './Picnic.css'

const Picnic = () => {
    return (
        <div className='picnic' id='picnic'>
            <div className='container'>
                <div className='col-1'>
                    <p>Annual LODI Picnic</p>
                    <p>Lake of Dreams picnic has been an annual event.</p>
                    <button className='button'>Picnic</button>
                </div>
                <div className='col-2'>
                <img src={front} alt="front" style={{ width: '400px', }}/>
                </div>
            </div>
        </div>
    )
}

export default Picnic
