// Write your JS code here
import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

class Login extends Component {
  success = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/home')
  }

  login = async () => {
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const api = 'https://apis.ccbp.in/login'
    const opt = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const get = await fetch(api, opt)

    const res = await get.json()

    if (get.ok === true) {
      this.success(res.jwt_token)
    }
  }

  render() {
    const jwt = Cookies.get('jwt_token')

    if (jwt !== undefined) {
      return <Redirect to="/home" />
    }
    return (
      <div className="div1">
        <h1>Please Login</h1>
        <button type="button" onClick={this.login}>
          Login with Sample Creds
        </button>
      </div>
    )
  }
}

export default Login
