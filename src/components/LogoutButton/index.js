// Write your JS code here
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const Logout = props => {
  const logout = () => {
    const {history} = props
    Cookies.remove('jwt-token')
    history.replace('/login')
  }
  return (
    <button type="button" onClick={logout}>
      Logout
    </button>
  )
}

export default withRouter(Logout)
