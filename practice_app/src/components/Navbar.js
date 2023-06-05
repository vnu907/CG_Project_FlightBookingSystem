import { Component } from "react";

import "./NavbarStyles.css";
import { MenuItems } from "../components/MenuItems.jsx";
import { Link } from "react-router-dom";

class Navbar extends Component {
  // Set state
  state = { clicked: false };
  // Make Handleclick Function
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          <a href="/">FeelFly</a>
        </h1>

        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <button style={{ backgroundColor: "#a28ae5", color: "white" }}>
            <a href="/start">Account</a>{" "}
          </button>
          <button style={{ backgroundColor: "#a28ae5", color: "white" }}>
            <a href="/Register">Sign Up</a>{" "}
          </button>
          <button style={{ backgroundColor: "#a28ae5", color: "white" }}>
            {" "}
            <a href="/Login">Sign In</a>
          </button>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
