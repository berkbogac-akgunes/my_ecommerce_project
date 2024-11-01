import { Switch, Route } from "react-router-dom"
import './App.css'
import HomePage from './pages/HomePage'
import ShopPage from "./pages/ShopPage"
import { ProductPage } from "./pages/ProductPage"
import { TeamPage } from "./pages/TeamPage"
import { ContactPage } from "./pages/ContactPage"
import { SignUpPage } from "./pages/SignUpPage"
import { AboutUs } from "./pages/AboutUsPage"
import { LoginPage } from "./pages/LoginPage"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AutoLogin } from "./helpers/AutoLogin"



function App() {
  AutoLogin()
  
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
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/team">
          <TeamPage />
        </Route>
        <Route path="/signup">
          <SignUpPage />
        </Route>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/shop/:gender/:category">
          <ShopPage/>
        </Route>
      </Switch>
      <ToastContainer />
    </>
  )
}

export default App
