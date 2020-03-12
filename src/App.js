import React, {Component} from 'react'
import {HashRouter} from 'react-router-dom'
import routes from './routes'
import './App.css'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {FaFacebook} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div>
            {routes}
          </div>

          <footer id="footer">
            <div>
              <p> Copyright © Your Website 2019 </p>
            </div>
            <div id='footicons'>
              <div > <AiFillTwitterCircle   className='icons' id='tweet' /> </div>
              <div > <FaFacebook className='icons' /> </div>
              <div > <FaLinkedin className='icons' /> </div>
            </div>
            <div id='footlink-contain'>
              <span id='footlink'> Privacy Policy </span>
              <span id='footlink' > Terms of Use </span>
            </div>
          </footer>
        </div>
      </HashRouter>
    )
  }
}
export default App