import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from './components/layout/NavBar'
import Home from'./components/pages/Home'
import SignIn from'./components/pages/SignIn'

class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/signin' component={SignIn} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
