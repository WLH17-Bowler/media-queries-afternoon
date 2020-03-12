import React from 'react'
import {withRouter} from 'react-router-dom'
import Header from './Header'

const Portfolio = () => {
    return (
        <div>
        <Header  />
            <div className='port-container'>
                
                    <div id='port-intro' >
                        <h1> PORTFOLIO </h1>
                        <p> Lorem ipsum dolor sit amet consectetur. </p>
                    </div>

                <div id='port-wrapper' >
                    <div id='block1' >
                        <div id='blocks'>
                            <img className='port-deck' alt='' src='https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/01-thumbnail.jpg' />
                            <div id='port-white'>
                                <h2> Threads </h2>
                                <p> Illustration </p>
                            </div>
                        </div>
                        <div id='blocks'>
                            <img className='port-deck' alt='' src='https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/02-thumbnail.jpg' />
                            <div id='port-white'>
                                <h2> Explore </h2>
                                <p> Graphic Design </p>
                            </div>
                        </div>
                        <div id='blocks'>
                            <img className='port-deck' alt='' src='https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/03-thumbnail.jpg' />
                            <div id='port-white'>
                                <h2> Finish </h2>
                                <p> Identity </p>
                            </div>
                        </div>
                    </div>

                    <div id='block2' >
                        <div id='blocks'>
                            <img className='port-deck' alt='' src='https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/04-thumbnail.jpg' />
                            <div id='port-white'>
                                <h2> Threads </h2>
                                <p> Illustration </p>
                            </div>
                        </div>
                        <div id='blocks'>
                            <img className='port-deck' alt='' src='https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/05-thumbnail.jpg' />
                            <div id='port-white'>
                                <h2> Explore </h2>
                                <p> Graphic Design </p>
                            </div>
                        </div>
                        <div id='blocks'>
                            <img className='port-deck' alt='' src='https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/06-thumbnail.jpg' />
                            <div id='port-white'>
                                <h2> Finish </h2>
                                <p> Identity </p>
                            </div>
                        </div>
                    </div>   

                </div>
            </div>
        </div>
    )
}
export default withRouter(Portfolio)