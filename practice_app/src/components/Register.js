import { useState } from "react";

import axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8082/api/v1/user/save", {
        username: username,
        email: email,
        password: password,
      });
      alert("User Registation Successfully");
    } catch (err) {
      alert(err);
    }
  }

  return (
    <>
      <body className="bck">
        <div>
          <header
            style={{ color: "white", width: "341%", background: "#a28ae5" }}
          >
            <h1>Create Your Free Account...</h1>
          </header>
          <button
            style={{
              background: "plum",
              color: "red",
              fontSize: "20px",
              marginTop: "10px",
              width: "100px",
            }}
          >
            <a href="/Login">Sign In</a>
          </button>
          <button
            style={{
              background: "plum",
              color: "red",
              fontSize: "20px",
              marginTop: "10px",
              width: "100px",
              marginLeft: "10px",
            }}
          >
            <a href="/Home">Home</a>
          </button>
          <div
            class="container"
            style={{
              backgroundColor: "white",

              justifyContent: " center",
              width: " 500px",
              height: "449px",
              marginLeft: "100px",
              marginTop: "20px",
              textAlign: "center",
              color: "black",
              borderRadius: "10px",
            }}
          >
            <div
              class="card"
              style={{
                fontSize: "20px",
                textAlign: "center",
                color: "#a28ae5",
              }}
            >
              <h1>User Registation</h1>

              <form>
                <div class="form-group">
                  <label
                    style={{
                      fontSize: "24px",
                      fontWeight: "bold",
                    }}
                  >
                    User Name
                  </label>
                  <input
                    style={{
                      width: "360px",
                      height: "39px",
                      marginLeft: "5px",
                    }}
                    type="text"
                    class="form-control"
                    id="username"
                    placeholder="Enter Name"
                    value={username}
                    onChange={(event) => {
                      setUsername(event.target.value);
                    }}
                  />
                </div>

                <div class="form-group">
                  <label
                    style={{
                      fontSize: "23px",
                      fontWeight: "bold",
                    }}
                  >
                    USER Email
                  </label>
                  <input
                    style={{
                      width: "360px",
                      height: "39px",
                      marginLeft: "5px",
                      marginTop: "35px",
                    }}
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                </div>

                <div class="form-group">
                  <label
                    style={{
                      fontSize: "24px",
                      fontWeight: "bold",
                    }}
                  >
                    Password
                  </label>
                  <input
                    style={{
                      width: "360px",
                      height: "39px",
                      marginLeft: "19px",
                      marginTop: "35px",
                    }}
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                  />
                </div>

                <button
                  type="submit"
                  class="btn btn-primary mt-4"
                  onClick={save}
                  style={{
                    backgroundColor: "#a28ae5",
                    color: "white",
                    width: "130px",
                    marginLeft: "40px",
                    height: "49px",
                    borderRadius: "10px ",
                    marginTop: "0px",
                    fontSize: "23px",
                  }}
                >
                  {" "}
                  <a href="/login"> Register</a>
                </button>
              </form>
            </div>
          </div>
        </div>
        <footer
          style={{
            backgroundColor: "rgb(84, 199, 225)",
            color: "white",
            width: "99vw",
            textAlign: "center",
            marginTop: "190px",
            height: "40px",
          }}
        >
          © Copyright: AVZ Team
        </footer>
      </body>
    </>
  );
}

export default Register;
