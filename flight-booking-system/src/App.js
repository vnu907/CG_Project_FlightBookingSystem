import "./styles.css";
import { Route ,Routes } from "react-router-dom";


import Navbar from "./components/Navbar";
import Home from "./routes/Home.jsx";
import About from "./routes/About.jsx";
import Service from "./routes/Service.jsx";
import Contact from "./routes/Contact.jsx";
import Signin from "./routes/Signin.jsx";
import Signup from "./routes/Signup.jsx";
import Footer from "./components/Footer.jsx"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Footer/>
      <Routes>
      <Route path ='/' elements={<Home/>}/> 
      <Route path ='/navbar' elements={<Navbar/>}/> 
      <Route path ='/about' elements={<About/>}/> 
      <Route path ='/contact' elements={<Contact/>}/> 
      <Route path ='/service' elements={<Service/>}/> 
      <Route path ='/signin' elements={<Signin/>}/> 
      <Route path ='/signup' elements={<Signup/>}/> 
      </Routes> 
     
    </div>
  )
    };
 export default  App;