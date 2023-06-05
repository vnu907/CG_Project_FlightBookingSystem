// import { useState } from "react";
// import Start1 from "./Start1";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   async function login(event) {
//     event.preventDefault();
//     try {
//       await axios
//         .post("http://localhost:8085/api/v1/user/login", {
//           email: email,
//           password: password,
//         })
//         .then(
//           (res) => {
//             console.log(res.data);

//             if (res.data.message == "Email not exits") {
//               alert("Email not exits");
//             } else if (res.data.message == "Login Success") {
//               alert("Email not exits");
//               // navigate('/home');
//             } else {
//               alert("Incorrect Email and Password not match");
//             }
//           },
//           (fail) => {
//             console.error(fail); // Error!
//           }
//         );
//     } catch (err) {
//       alert(err);
//     }
//   }

//   return (
//     <>
//       <div>
//         <div
//           class="container"
//           style={{
//             backgroundColor: "rgb(182, 114, 238)",
//             marginLeft: "84px",
//             width: "460px",
//             height: "350px",
//             color: "black",
//             borderRadius: "10px",
//           }}
//         >
//           <div
//             class="row"
//             style={{
//               color: "black",
//               fontStyle: "normal",
//               fontSize: "Bold",
//               marginTop: "100px",
//             }}
//           >
//             <h2
//               style={{
//                 fontSize: "40px",
//                 textAlign: "center",
//                 color: "white",
//               }}
//             >
//               Login
//             </h2>
//             <hr />
//           </div>

//           <div class="row">
//             <div class="col-sm-6">
//               <form>
//                 <div
//                   class="form-group"
//                   style={{
//                     color: "white",
//                     fontSize: "bold",
//                     textAlign: "left",
//                     margin: "20px",
//                     width: "450px",
//                   }}
//                 >
//                   <label
//                     style={{
//                       fontSize: "24px",
//                     }}
//                   >
//                     User Email
//                   </label>
//                   <input
//                     style={{
//                       width: "360px",
//                       height: "39px",
//                     }}
//                     type="email"
//                     class="form-control"
//                     id="email"
//                     placeholder="Enter Email"
//                     value={email}
//                     onChange={(event) => {
//                       setEmail(event.target.value);
//                     }}
//                   />
//                 </div>

//                 <div
//                   class="form-group"
//                   style={{
//                     color: "white",
//                     textAlign: "left",
//                     margin: "20px",
//                     width: "450px",
//                   }}
//                 >
//                   <label
//                     style={{
//                       fontSize: "24px",
//                     }}
//                   >
//                     Password
//                   </label>
//                   <input
//                     style={{
//                       width: "360px",
//                       height: "39px",
//                     }}
//                     type="password"
//                     class="form-control"
//                     id="password"
//                     placeholder="Enter Password"
//                     value={password}
//                     onChange={(event) => {
//                       setPassword(event.target.value);
//                     }}
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   class="btn btn-primary"
//                   onClick={login}
//                   style={{
//                     backgroundColor: "#a28ae5",
//                     color: "black",
//                     width: "100px",
//                     marginLeft: "190px",
//                     height: "49px",
//                     borderRadius: "10px ",
//                     marginTop: "36px",
//                     fontSize: "23px",
//                   }}
//                 >
//                   <a href="/Start1">Login</a>
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//       <footer
//         style={{
//           backgroundColor: "lightgreen",
//           color: "white",
//           width: "99vw",
//           textAlign: "center",
//           marginTop: "300px",
//           height: "40px",
//         }}
//       >
//         © Copyright: AVZ Team
//       </footer>
//     </>
//   );
// }

// export default Login;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault();
    try {
      await axios
        .post("http://localhost:8082/api/v1/user/login", {
          email: email,
          password: password,
        })
        .then(
          (res) => {
            console.log(res.data);

            if (res.data.message == "Email not exits") {
              alert("Email not exits");
            } else if (res.data.message == "Login Success") {
              navigate("/Start1");
              alert("Login Success");
            } else {
              alert("Incorrect Email and Password not match");
            }
          },
          (fail) => {
            console.error(fail); // Error!
          }
        );
    } catch (err) {
      alert(err);
    }
  }

  return (
    <>
      <div>
        <header
          style={{ color: "white", width: "341%", background: "#a28ae5" }}
        >
          <h1>Login To Your Account...</h1>
        </header>
        <button
          style={{
            backgroundColor: "rgb(182, 114, 238)",
            color: "red",
            fontSize: "20px",
            marginTop: "10px",
            width: "100px",
            marginLeft: "10px",
          }}
        >
          <a href="/Register">SignUp</a>
        </button>
        <button
          style={{
            background: "rgb(182, 114, 238)",
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
            backgroundColor: "rgb(182, 114, 238)",
            marginLeft: "84px",
            width: "460px",
            height: "350px",
            color: "black",
            borderRadius: "10px",
          }}
        >
          <div
            class="row"
            style={{
              color: "black",
              fontStyle: "normal",
              fontSize: "Bold",
              marginTop: "100px",
            }}
          >
            <h2
              style={{
                fontSize: "40px",
                textAlign: "center",
                color: "white",
              }}
            >
              Login
            </h2>
            <hr />
          </div>

          <div class="row">
            <div class="col-sm-6">
              <form>
                <div
                  class="form-group"
                  style={{
                    color: "white",
                    fontSize: "bold",
                    textAlign: "left",
                    margin: "20px",
                    width: "450px",
                  }}
                >
                  <label
                    style={{
                      fontSize: "24px",
                    }}
                  >
                    User Email
                  </label>
                  <input
                    style={{
                      width: "360px",
                      height: "39px",
                    }}
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Enter Name"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                </div>

                <div
                  class="form-group"
                  style={{
                    color: "white",
                    textAlign: "left",
                    margin: "20px",
                    width: "450px",
                  }}
                >
                  <label
                    style={{
                      fontSize: "24px",
                    }}
                  >
                    Password
                  </label>
                  <input
                    style={{
                      width: "360px",
                      height: "39px",
                    }}
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                  />
                </div>
                <button
                  type="submit"
                  class="btn btn-primary"
                  onClick={login}
                  style={{
                    backgroundColor: "#82efe0",
                    color: "white",
                    width: "100px",
                    marginLeft: "170px",
                    height: "49px",
                    borderRadius: "10px ",
                    marginTop: "20px",
                    fontSize: "23px",
                  }}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <footer
        style={{
          backgroundColor: "#82efe0",
          color: "white",
          width: "99vw",
          textAlign: "center",
          marginTop: "208px",
          height: "40px",
        }}
      >
        © Copyright: AVZ Team
      </footer>
    </>
  );
}

export default Login;
