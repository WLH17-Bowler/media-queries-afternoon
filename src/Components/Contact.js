import React from 'react'
import {withRouter} from 'react-router-dom'
import Header from './Header'

const Contact = () => {
    return (
        <div id='empty'>
        <Header  />
            <div id="contact-page">
                <div id='contact'>
                    <h1> CONTACT US </h1>
                    <p> Lorem ipsum dolor sit amet consectetur </p>
                </div>
                <div id='contact-boxes' >
                    <div id='left-boxes'>
                        <input id='input' placeholder='Your Name*' />
                        <input id='input' placeholder='Your Email*' />
                        <input id='input' placeholder='Your Phone*' />
                    </div>
                    <div id='right-box' >
                        <input id='r-input' placeholder='Your Message*' />
                    </div>
                </div>
                    <button id='contact-btn' > Send Message </button>
            </div>
        </div>
    )
}
export default withRouter(Contact)