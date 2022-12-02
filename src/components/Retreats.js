import React from 'react'
import user2 from './images/user2.jpeg'
import user3 from './images/user3.jpeg'
import './Retreats.css'

const Retreats = () => {
    return (
        <div className='testimonials' id='retreats'>
            <div className='container'>
                <h2>Retreats</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <img src={user2} alt='user1'/>
                        <p>In just 2 very short meetings with John he managed to find the solution personally catered to my situation and expectations. Punctual, well informed and very reliable.</p>
                        <p><span>Carol Harper</span></p>
                        <p>Director at Risktec Solutions Ltd</p>
                    </div>
                    <div className='card'>
                        <img src={user3} alt='user1'/>
                        <p>A very professional financial advisor, who is true to his word. John has demonstrated a high amount of integrity in the time I have known him, and he is fast to respond to my concerns.</p>
                        <p><span>Snow.J.R.</span></p>
                        <p>Managing Director of BPW Global</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Retreats
