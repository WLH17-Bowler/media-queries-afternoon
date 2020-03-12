import React from 'react'
import {withRouter} from 'react-router-dom'
import Header from './Header'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {FaFacebook} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'

const Team = () => {
    return (
        <div>
        <Header  />
        <div id='team-container' >
            <div id='team' >
                <h1> OUR AMAZING TEAM </h1>
                <p> Lorem Ipsum dolor sit amet consectetur. </p>
            </div>
            <div id='bios-container' >
                <div className='spotlight' >
                    <img className='bio-pic' src='https://blackrockdigital.github.io/startbootstrap-agency/img/team/1.jpg' alt='' />
                    <h2> Kay Garland </h2>
                    <p> Lead Design </p>
                    <div id='bio-footicons'>
                        <div > <AiFillTwitterCircle id='bio-twitter' /> </div>
                        <div > <FaFacebook id='bio-fb' /> </div>
                        <div > <FaLinkedin id='bio-in' /> </div>
                    </div>
                </div>
                <div className='spotlight' >
                    <img className='bio-pic' src='https://blackrockdigital.github.io/startbootstrap-agency/img/team/2.jpg' alt='' />
                    <h2> Larry Parker </h2>
                    <p> Lead Marketer </p>
                    <div id='bio-footicons'>
                        <div > <AiFillTwitterCircle id='bio-twitter' /> </div>
                        <div > <FaFacebook id='bio-fb' /> </div>
                        <div > <FaLinkedin id='bio-in' /> </div>
                    </div>
                </div>
                <div className='spotlight' >
                    <img className='bio-pic' src='https://blackrockdigital.github.io/startbootstrap-agency/img/team/3.jpg' alt='' />
                    <h2> Diana Pertersen </h2>
                    <p> Lead Developer </p>
                    <div id='bio-footicons'>
                        <div > <AiFillTwitterCircle id='bio-twitter' /> </div>
                        <div > <FaFacebook id='bio-fb' /> </div>
                        <div > <FaLinkedin id='bio-in' /> </div>
                    </div>
                </div>
            </div>
            <div id='team-info'>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde. </p>
            </div>
        </div>
        </div>
    )
}
export default withRouter(Team)