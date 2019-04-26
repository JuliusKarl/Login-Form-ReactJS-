import React, {Component}from 'react';
import Login from './Login'
import SignUp from './SignUp'
import Forgotten from './Forgotten'
import './App.css'


class App extends Component {
  constructor() {
    super()
    this.state = {
      login: true,
      signup: false,
      forgotten: false
    }
    this.login = this.login.bind(this)
    this.signup = this.signup.bind(this)
    this.forgotten = this.forgotten.bind(this)
  }
  login() {
    this.setState({
      login: true,
      signup: false,
      forgotten: false
    })
  }
  signup() {
    this.setState({
      login: false,
      signup: true,
      forgotten: false
    })
  }
  forgotten() {
    this.setState({
      login: false,
      signup: false,
      forgotten: true
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          {this.state.login && <Login forgotten={this.forgotten} signup={this.signup}/>}
          {this.state.signup && <SignUp login={this.login}/>}
          {this.state.forgotten && <Forgotten login={this.login} signup={this.signup}/>}
        </div>
      </div>
    )
  }
}

export default App;
