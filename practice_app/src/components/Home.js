// import React from "react";

// import "./styles.css";
// // import { Routes ,Route } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Plane from "./components/Plane";
// import Footer from "./components/Footer";
// import { Routes, Route } from "react-router-dom";
// import SignIn from "./routes/SignIn";
// import About from "./routes/About";
// import FlightForm from "./components/FlightForm";
// // import SearchForm from "./components/SearchForm";

// function Home() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Plane />
//       <FlightForm />

//       <Footer />
//       <Routes>
//         <Route path="/navbar" elements={<Navbar />} />
//         <Route path="/signin" elements={<SignIn />} />
//         <Route path="/navbar" elements={<Navbar />} />
//         <Route path="/about" elements={<About />} />
//       </Routes>
//     </div>
//   );
// }
// export default Home;

// import "./Home.css";

// function Home() {
//   return (
//     <>
//       <div>
//         <div
//           class="container"
//           style={{
//             backgroundColor: "rgb(182, 114, 238)",

//             marginLeft: "0px",
//             width: "99vw",
//             height: "625px",
//             color: "black",
//             borderRadius: "10px",
//           }}
//         ></div>
//       </div>
//     </>
//   );
// }

// export default Home;

import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import FlightForm from "./FlightForm";
import Plane from "./Plane";

function Home() {
  return (
    <div>
      <Navbar />
      <Plane />
      <FlightForm />
      <Footer />
    </div>
  );
}

export default Home;
