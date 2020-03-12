import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home'
import Services from './Components/Services'
import About from './Components/Team'
import Contact from './Components/Contact'
import Portfolio from './Components/Portfolio'
import Team from './Components/About'

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/about' component={About} />
        <Route path='/team' component={Team} />
        <Route path='/contact' component={Contact} />
    </Switch>
)