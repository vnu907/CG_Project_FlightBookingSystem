import React from "react";
import "./Start.css";

function Start() {
  return (
    <>
      <header
        className="head"
        style={{
          backgroundColor: "plum",
          height: "35px",
          width: "98.5vw",
          display: "flex",
          alignItems: "end",
          textDecoration: "none",
        }}
      >
        <li className="three">
          <a
            className="starta"
            style={{
              backgroundColor: "plum",
              color: " #a827f0",
              height: "50px",
            }}
            href="/Home"
          >
            Home
          </a>
        </li>
        <li className="three">
          <a
            className="starta"
            style={{
              backgroundColor: "plum",
              color: " #a827f0",
              cursor: " pointer",
            }}
            href="/Start1"
          >
            Payment
          </a>
        </li>

        <li className="three">
          <a
            className="starta"
            style={{
              backgroundColor: "plum",
              color: " #a827f0",
              height: "50px",
            }}
            href="/SearchForm"
          >
            Search
          </a>
        </li>

        <li className="three">
          <a
            className="starta"
            style={{
              backgroundColor: "plum",
              color: " #a827f0",
              height: "50px",
            }}
            href="/FlightDetailsForm"
          >
            Flight
          </a>
        </li>
      </header>
      <main className="startmain">
        <div
          class="startbox"
          style={{
            textAlign: "left",
            padding: "20px",
            width: "500px",
            height: "289px",
            position: "absolute",
            marginLeft: "-420px",
            marginTop: "30px",
            borderRadius: " 10px",
            border: " 1px solid rgba(140, 222, 239, 0.178)",
            backgroundColor: " rgba(140, 222, 239, 0.178)",
          }}
        >
          <h1
            style={{ fontSize: "40px", color: "rgb(182, 114, 238)" }}
            className="starth1"
          >
            {" "}
            Easy Way To Your Next Destination...
            <br></br>
            Choose To Go Ahead...
          </h1>
          <ol className="startol">
            <li className="startli">
              {" "}
              <a
                style={{
                  color: " rgb(84, 199, 225)",

                  textDecoration: "none",
                  fontSize: " 20px",
                  fontWeight: "bold",
                }}
                className="starta"
                href="/Login"
              >
                User Login
              </a>{" "}
            </li>
            <li className="startli">
              {" "}
              <a
                style={{
                  color: " rgb(84, 199, 225)",

                  textDecoration: "none",
                  fontSize: " 20px",
                  fontWeight: "bold",
                }}
                className="starta"
                href="/AdminLogin"
              >
                Admin Login
              </a>{" "}
            </li>
            <li className="startli">
              {" "}
              <a
                style={{
                  color: " rgb(84, 199, 225)",

                  textDecoration: "none",
                  fontSize: " 20px",
                  fontWeight: "bold",
                }}
                className="starta"
                href="/Register"
              >
                User Signup
              </a>{" "}
            </li>
          </ol>
        </div>
      </main>
    </>
  );
}

export default Start;
