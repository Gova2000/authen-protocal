// Write your JS code here
import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

class Login extends Component {
  success = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt-token', jwtToken, {expires: 30})
    history.replace('/')
  }

  login = async () => {
    const api = 'https://apis.ccbp.in'
    const opt = {
      method: 'POST',
    }

    const get = await fetch(api, opt)
    console.log(get)
    const res = await get.json()
    console.log(res)
    this.success(res.jwt_token)
  }

  render() {
    const jwt = Cookies.get('jwt-token')

    if (jwt !== undefined) {
      return <Redirect to="/" />
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
