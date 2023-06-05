import start from "./components/start.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import success from "./components/success.js";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Component } from "react";
import Home from "./components/Home.js";

import Start1 from "./components/Start1.js";
import Card1 from "./components/Card1";
import Upi1 from "./components/Upi1";
import Success1 from "./components/Success1";
import SearchForm from "./components/SearchForm.js";

// import "./Plane.css";
// import { Routes ,Route } from "react-router-dom";

import Navbar from "./components/Navbar";
// import Plane from "./components/Plane";
// import Footer from "./components/Footer";

// import SignIn from "./routes/SignIn";
// import About from "./routes/About";
// import FlightForm from "./components/FlightForm";
// import Home from "./components/Home";
import AdminDashboard from "./components/AdminDashboard.jsx";
import AdminLogin from "./components/AdminLogin.jsx";




class App extends Component {
  render() {
    return (<>
      <SearchForm/>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" exact Component={Home} />
            <Route path="/Login" exact Component={Login} />
            <Route path="/Register" exact Component={Register} />
            <Route path="/success" exact Component={success} />
            <Route path="/Home" exact Component={Home} />
            <Route path="/AdminLogin" exact Component={AdminLogin} />
            <Route path="/Start1" exact Component={Start1} />
            <Route path="/AdminDashboard" exact Component={AdminDashboard} />
            <Route path="/Card1" exact Component={Card1} />
            <Route path="/Upi1" exact Component={Upi1} />
            <Route path="/Success1" exact Component={Success1} />
            <Route path="/SearchForm" exact Component={SearchForm} />
            

            <Route path="/start" Component={start} />
            <Route path="/Home" Component={Home} />
            <Route path="/navbar" Component={Navbar} />
            {/* <Route path="/signin" Component={SignIn} /> */}
            <Route path="/navbar" Component={Navbar} />
            {/* <Route path="/about" Component={About} /> */}
          </Routes>
        </div>
      </Router>
      </>
    );
  }
}

export default App;
