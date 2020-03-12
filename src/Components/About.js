import React from 'react'
import {withRouter} from 'react-router-dom'
import Header from './Header'

const About = () => {
    return (
        <div>
        <Header  />
        <div className='about-container' >
            <div id='about-title'>
                <h1> ABOUT </h1>
                <p> Lorem ipsum dolor sitt amet consectetur. </p>
            </div>
            <div>
                <h2> 2009-2011 </h2>
                <h2> Our Humble Beginnings </h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
            </div>
        </div>
        </div>
    )
}
export default withRouter(About)