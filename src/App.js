import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Form from './components/Form'
import Home from './components/Home'
import Nav from './components/Nav'
import Results from './components/Estimate'

function App() {
  return (
    <Router>

      <Nav />

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/form" component={Form}/>
        <Route path="/estimates/:id" component={Results}/>
      </Switch>
    </Router>
  )
}

export default App
