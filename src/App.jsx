import { Switch, Route } from "react-router-dom"
import './App.css'
import HomePage from './pages/HomePage'
import ShopPage from "./pages/ShopPage"

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/shop">
          <ShopPage />
        </Route>
      </Switch>
    </>
  )
}

export default App
