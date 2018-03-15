import React, { Component } from 'react';
import './App.css';
import Signup from './Signup';
import Login from './Login';
import { UserProfile } from './UserProfile';
import axios from 'axios';
import Home from './Home';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Listing from './Listing';

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      token: '',
      user: {},
      listings: {}
    }
    this.liftTokenToState = this.liftTokenToState.bind(this)
    this.logout = this.logout.bind(this)
    this.handleLocationSelect = this.handleLocationSelect.bind(this)
  }

  liftTokenToState(data) {
    this.setState({
      token: data.token,
      user: data.user
    })
  }

  handleLocationSelect(e) {
    console.log('LocationSelected')
    e.preventDefault()
    axios.get('/listings/' + e.target.value).then( result => {
      this.setState({
        listings: result.data
      })
      console.log(this.state.listings)
    }).catch(err => console.log(err))
  }

  logout() {
    console.log('Logging Out')
    localStorage.removeItem('mernToken')
    this.setState({token: '', user: {} })
  }

  componentDidMount() {
    var token = localStorage.getItem('mernToken')
    if (token === 'undefined' || token === null || token === '' || token === undefined) {
      localStorage.removeItem('mernToken')
      this.setState({
        token: '',
        user: {}
      })
    } else {
      axios.post('/auth/me/from/token', {
        token,
      }).then( result => {
        localStorage.setItem('mernToken', result.data.token)
        this.setState({
          token: result.data.token,
          user: result.data.user,
        })
      }).catch( err => console.log(err))
    }
  }

  render() {
    let theUser = this.state.user
    if (typeof this.state.user === 'object' && Object.keys(this.state.user).length > 0) {
      return (
        <Router>
          <div className="App">
            <nav>
              <div className="logo">
                <img src="/img/logo.jpg" />
              </div>
              <div className='nav-links'>
                <a href="/">Home</a>
                <button onClick={this.logout}>Logout</button>
              </div>
            </nav>
            <Route exact path='/'
              component={(props) => <Home onLocationSelect={this.handleLocationSelect} listings={this.state.listings} /> } />
            <Route exact path='/listing'
              component={(props) =>
                <Listing listings={this.state.listings}  />
              }
            />
            {/*<UserProfile user=theUser} logout=this.logout} />*/}
          </div>
        </Router>
      );
    } else {
      return (
        <div className="App">
          <Signup liftToken={this.liftTokenToState} />
          <Login liftToken={this.liftTokenToState} />
        </div>
      );
    }
  }
}

export default App;
