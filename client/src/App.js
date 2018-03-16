import React, { Component } from 'react';
import './App.css';
import Signup from './Signup';
import Login from './Login';
// import { UserProfile } from './UserProfile';
import axios from 'axios';
import Home from './Home';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import Listing from './Listing';

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      token: '',
      user: {},
      listings: [],
      current: {},
      redirectTo: null,
      modal: false,
    }
    this.liftTokenToState = this.liftTokenToState.bind(this)
    this.logout = this.logout.bind(this)
    this.handleLocationSelect = this.handleLocationSelect.bind(this)
    this.handleCurrent = this.handleCurrent.bind(this)
    this.handleCompleteOrder = this.handleCompleteOrder.bind(this)
  }

  liftTokenToState(data) {
    this.setState({
      token: data.token,
      user: data.user
    })
  }

  handleCurrent(e) {
    e.preventDefault()
    console.log(e.target.id)
    axios.get('/listings/cave/' + e.target.id).then( result => {
      this.setState({
        current: result.data,
        redirectTo: '/listing'
      })
      console.log(this.state.current)
    }).catch(err => console.log(err))
  }

  handleLocationSelect(e) {
    console.log('LocationSelected')
    e.preventDefault()
    axios.get('/listings/' + e.target.value).then( result => {
      this.setState({
        listings: result.data,
        current: {}
      })
      console.log(this.state.listings)
    }).catch(err => console.log(err))
  }

  handleCompleteOrder(e) {
    e.preventDefault()
    console.log('hello')
    this.setState({
      redirectTo: null,
      modal: true
    })
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
          user: result.data.user
        })
      }).catch( err => console.log(err))
    }
  }

  render() {
    let redirect;
    if (this.state.redirectTo) {
      redirect = (<Redirect to={{ pathname: this.state.redirectTo }} />)
    }
    let modalState = 'modal'
    if (this.state.modal) {
      modalState = 'modal show'
    }
    let theUser = this.state.user
    if (typeof this.state.user === 'object' && Object.keys(this.state.user).length > 0) {
      return (
        <Router>
          <div className="App">
            <div className={modalState}>
              <div className="modal-container">
                <h2>Cave. Booked.</h2>
                <h3>Reciept Is Printing</h3>
                <img src="/img/reciept.jpg" />
                <a href="/">Find More Caves</a>
              </div>
            </div>
            {redirect}
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
              component={(props) => <Home onLocationSelect={this.handleLocationSelect} onCurrentSelect={this.handleCurrent} listings={this.state.listings}  /> } />
            <Route exact path='/listing'
              component={(props) =>
                <Listing current={this.state.current} onCompleteOrder={this.handleCompleteOrder}  />
              }
            />
            {/*<UserProfile user=theUser} logout=this.logout} />*/}
          </div>
        </Router>
      );
    } else {
      return (
        <div className="login-app">
          <div className="login-container">
            <img src="/img/logo.png" />
            <div>
              <Signup liftToken={this.liftTokenToState} />
              <Login liftToken={this.liftTokenToState} />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
