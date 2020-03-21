import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

class Header extends Component {
    state = {
        dropDownMenu: false
    }
    showMenu = () => {
        this.setState({dropDownMenu: !this.state.dropDownMenu})
        console.log(this.state.dropDownMenu)
    }
    reset = () => {
        this.setState({dropDownMenu: false})
    }
    render() {
        return (
            <div>
                <header id='header'>
                    <div>
                        <Link  to='/' >
                            <button id='logo' > Start Bootstrap </button>
                        </Link>
                    </div>

                    <nav id='desktop' >
                        <Link  to="/services" >
                            <button id='nav' > SERVICES </button>
                        </Link>
                        <Link  to='/portfolio' >
                            <button id='nav' > PORTFOLIO </button>
                        </Link>
                        <Link  to='/team' >
                            <button id='nav' > ABOUT </button>
                        </Link>
                        <Link  to='/about' >
                            <button id='nav' > TEAM </button>
                        </Link>
                        <Link  to='/contact' >
                            <button id='nav' > CONTACT </button>
                        </Link>
                    </nav>
                    
                        <nav id='mobile-nav' onClick={() => this.showMenu()}> MENU </nav>
                    {
                        this.state.dropDownMenu ? (<div id='show-dd'>
                        <Link  to="/services" >
                            <button className='mobile' > SERVICES </button>
                        </Link>
                        <Link  to='/portfolio' >
                            <button className='mobile' > PORTFOLIO </button>
                        </Link>
                        <Link  to='/team' >
                            <button className='mobile' > ABOUT </button>
                        </Link>
                        <Link  to='/about' >
                            <button className='mobile' > TEAM </button>
                        </Link>
                        <Link  to='/contact' >
                            <button className='mobile' > CONTACT </button>
                        </Link>
                        </div>)
                    : null }
                    
                </header>
            </div>    
        )
    }
}
export default withRouter(Header)