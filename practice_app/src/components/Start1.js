import React from "react";
import "./Start1.css";

function Start1() {
  return (
    <>
      <main className="startmain">
        <div
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
          class="startbox"
        >
          <h1
            style={{ fontSize: "50px", color: "rgb(182, 114, 238)" }}
            className="starth1"
          >
            Choose Payment Type
          </h1>
          <ol className="startol">
            <li className="startli">
              {" "}
              <a
                style={{
                  color: " rgb(84, 199, 225)",

                  textDecoration: "none",
                  fontSize: " 40px",
                  fontWeight: "bold",
                }}
                className="starta"
                href="/Card1"
              >
                Card
              </a>{" "}
            </li>
            <li className="startli">
              {" "}
              <a
                style={{
                  color: " rgb(84, 199, 225)",

                  textDecoration: "none",
                  fontSize: " 40px",
                  fontWeight: "bold",
                }}
                className="starta"
                href="/Upi1"
              >
                UPI
              </a>{" "}
            </li>
          </ol>
        </div>
      </main>
    </>
  );
}

export default Start1;
