import { Switch, Route } from "react-router-dom"
import './App.css'
import HomePage from './pages/HomePage'

function App() {
  return (
    <>
      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>
      </Switch>
    </>
  )
}

export default App
