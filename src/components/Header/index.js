// Write your JS code here

import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="div">
    <Link to="/home" className="l">
      Home
    </Link>
    <Link to="/about" className="l">
      About
    </Link>
  </div>
)

export default Header
