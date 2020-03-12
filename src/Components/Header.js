import React from 'react'
import {Link, withRouter} from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <header id='header'>
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
                    <Link  to='/team' >
                        <button id='nav'> ABOUT </button>
                    </Link>
                    <Link  to='/about' >
                        <button id='nav' > TEAM </button>
                    </Link>
                    <Link  to='/contact' >
                        <button id='nav'> CONTACT </button>
                    </Link>
                </div>
            </header>
        </div>    
    )
}
export default withRouter(Header)