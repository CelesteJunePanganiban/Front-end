import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/Login";
//import SignUp from './components/Signup'
import Dashboard from "./components/Dashboard";
import Main from "./components/Main";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top ">
          <div className="container">
            <Link className="navbar-brand" to={"/sign-in"}>
              <img src="https://cdn-icons-png.flaticon.com/512/2876/2876988.png" />
              Slumbr
            </Link>
          </div>
        </nav>

        <div class="main">
          <Main />
        </div>
      </div>
    </Router>
  );
}

export default App;
