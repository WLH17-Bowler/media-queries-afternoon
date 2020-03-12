import React from 'react'
import {withRouter} from 'react-router-dom'
import Header from './Header'
import {FaShoppingCart} from 'react-icons/fa'
import {FaLaptop} from 'react-icons/fa'
import {FaLock} from 'react-icons/fa'

const Services = () => {
    return (
        <div>
        <Header  />
            <div className='services-container'>
                <div id='services-intro' >
                    <h1> SERVICES </h1>
                    <p> Lorem ipsum dolor sit amet consectetur. </p>
                </div>
                <div className="service-icons" >
                    <div id='service-icons' >
                        <div className='bigcons' > <FaShoppingCart className='servicons' /> </div>
                        <h2> E-COMMERCE </h2>
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. </p>
                    </div>
                    <div id='service-icons' >
                        <div className='bigcons' > <FaLaptop className='servicons' /> </div>
                        <h2> Responsive Design </h2>
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. </p>
                    </div>
                    <div id='service-icons' >
                        <div className='bigcons' > <FaLock className='servicons' /> </div>
                        <h2> E-COMMERCE </h2>
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(Services)