import { Switch, Route } from "react-router-dom"
import './App.css'
import HomePage from './pages/HomePage'
import ShopPage from "./pages/ShopPage"
import { ProductPage } from "./pages/ProductPage"

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
        <Route path="/productdetail">
          <ProductPage />
        </Route>
      </Switch>
    </>
  )
}

export default App
