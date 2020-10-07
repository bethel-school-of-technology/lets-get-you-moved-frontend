import React, { Component, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import "./index.css";
import Home from "./Home";
import Navbar from "./Navbar";
import Order from "./Order";
import Team from "./Team";
import Story from "./Story";
import Footer from "./Footer";
import Location from "./Location";
import State from "./State";
import navScroll from "./navScroll";
import * as serviceWorker from "./serviceWorker";
import ScrollToTop from "./ScrollToTop";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from './firebase';
import Receipt from "./Receipt";

function App() {
  const [{ user }, dispatch] = useStateValue();

  // useEffect - piece of code which runs based on a given condition
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in..
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out..
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      // Any cleanup operations go in here...
      unsubscribe();
    };
  }, []);


  return (
    
      <Router>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/order" component={Order} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/story" component={Story} />
          <Route exact path='/receipt' component={Receipt} />
          <Route exact path="/location" component={Location} />
          {/* <State/> */}
        </Switch>
        <Footer />
      </Router>
    );
    
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
export default App;
