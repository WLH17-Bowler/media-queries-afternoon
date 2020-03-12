import React from 'react'
import {Link, withRouter} from 'react-router-dom'

const Home = () => {
    return (
        <div id='home-img'>
            <header id='main-head'>
                <div>
                    <Link  to='/' >
                        <button id='logo' > Start Bootstrap </button>
                    </Link>
                </div>
                <div id='nav-links'>
                    <Link  to="/services" >
                        <button id='nav'> SERVICES </button>
                    </Link>
                    <Link  to='/portfolio' >
                        <button id='nav'> PORTFOLIO </button>
                    </Link>
                    <Link  to='/about' >
                        <button id='nav'> ABOUT </button>
                    </Link>
                    <Link  to='/team' >
                        <button id='nav' > TEAM </button>
                    </Link>
                    <Link  to='/contact' >
                        <button id='nav'> CONTACT </button>
                    </Link>
                </div>
            </header>
            <div id='home-contain'>
                <span id='welcome'> Welcome To Our Studio! </span>
                <span id='greeting' > IT'S NICE TO MEET YOU </span>
                <Link to='/about' >
                    <button id='home-btn'> TELL ME MORE </button>
                </Link>
            </div>
        </div>
    )
}
export default withRouter(Home)