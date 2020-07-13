import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from './components/layout/NavBar'
import Home from'./components/pages/Home'
import SignIn from './components/pages/SignIn'
import Setting from './components/pages/Setting'
import AnonSignIn from './components/pages/AnonSignIn'
import Summary from './components/pages/Summary'

class App extends Component {

  render(){
    return(
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path='/home' component={Home} />
            <Route exact path='/' component={SignIn} />
            <Route path='/anonsignin' component={AnonSignIn}/>
            <Route path='/settings' component={Setting} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
