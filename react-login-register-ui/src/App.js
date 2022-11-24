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
              Slumbr
            </Link>
          </div>
        </nav>

        {/* <div className="outer">
          <div className="inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/sign-in" element={<Login />} />
              <Route exact path="/" element={<Dashboard />}/>
            </Routes>
          </div>
        </div> */}

        <div class="main">
          <Main />
        </div>
      </div>
    </Router>
  );
}

export default App;
