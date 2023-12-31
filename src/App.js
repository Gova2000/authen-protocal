import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'

import Notfound from './components/NotFound'
import Pro from './components/ProtectedRoute'

const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Pro exact path="/home" component={Home} />
      <Pro exact path="/about" component={About} />

      <Route component={Notfound} />
    </Switch>
  </>
)

export default App
