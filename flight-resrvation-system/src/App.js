import "./styles.css";
// import { Routes ,Route } from "react-router-dom";


import Navbar from "./components/Navbar";
import Plane from "./components/Plane";
import Footer from "./components/Footer";
import { Routes ,Route } from "react-router-dom";
import SignIn from "./routes/SignIn";
import About from "./routes/About";
import FlightForm from "./components/FlightForm";
// import SearchForm from "./components/SearchForm";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Plane/>
      <FlightForm/>
      
    
      <Footer/>
    <Routes>
    <Route path ='/navbar' elements={<Navbar/>}/> 
    <Route path ='/signin' elements={<SignIn/>}/> 
    <Route path ='/navbar' elements={<Navbar/>}/> 
    <Route path ='/about' elements={<About/>}/> 
    
    
    </Routes>
     
    </div>
  )
    };
 export default  App;