// Write your JS code here
import {Redirect, Route} from 'react-router-dom'
import Cookies from 'js-cookie'

const Pro = props => {
  const JJ = Cookies.get('jwt-token')
  if (JJ === undefined) {
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}

export default Pro
