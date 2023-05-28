import React, {useState } from 'react'
import './card.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const notify=()=>{
  toast("Payment is Success")
}


function Card(){
  const [fullname, setfullname] = useState('')
  const [nickname, setnickname] = useState('')
  const [email, setemail] = useState('')
  const [cardnumber, setcardnumber] = useState('')
  const [cvc, setcvc] = useState('')
  const [dob,setdob]=useState('')

  const handleclick=(e)=>{
    e.preventDefault()
    const payment={
      fullname,nickname,
      email,
      cardnumber,cvc
    }
    console.log(payment)
  }
    return (
<main>


  <div className="wrapper">
  <ToastContainer
position="top-left"
autoClose={8000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    <h2>Payment Form</h2>
    <form action="/Success" onSubmit={notify}>
      <h4>Account</h4>
      <div className="input-group">
        <div className="input-box">
          <input type="text" placeholder="Full Name" required className="name"
           value={fullname} 
          onChange={(e)=>setfullname(e.target.value)} />
          <i className="fa fa-user icon"></i>
        </div>
        <div className="input-box">
          <input type="text" placeholder="Nick Name" required className="name"
            value={nickname} 
            onChange={(e)=>setnickname(e.target.value)}/>
          <i className="fa fa-user icon"></i>
        </div>
      </div>
      <div className="input-group">
        <div className="input-box">
          <input type="email" placeholder="Email Adress" required className="name"
            value={email} 
            onChange={(e)=>setemail(e.target.value)}/>
          <i className="fa fa-envelope icon"></i>
        </div>
      </div>
      <div className="input-group">
        <div className="input-box" value={dob} 
        onChange={(e)=>setdob(e.target.value)}>
          <h4> Date of Birth</h4>
          <input type="text" placeholder="DD" className="dob"/>
          <input type="text" placeholder="MM" className="dob"/>
          <input type="text" placeholder="YYYY" className="dob"/>
        </div>
        <div className="input-box">
          <h4> Gender</h4>
          <input type="radio" id="b1" name="gendar" checked className="radio"/>
          <label for="b1" className='cardlabel'>Male</label>
          <input type="radio" id="b2" name="gendar" className="radio"/>
          <label for="b2" className='cardlabel'>Female</label>
        </div>
      </div>
      <div className="input-group">
        <div className="input-box">
          <h4>Payment Details</h4>
          <input type="radio" name="pay" id="bc1" checked className="radio"/>
          <label for="bc1" className='cardlabel'><span> Credit Card</span></label>
          <input type="radio"  name="pay" id="bc2" className="radio"/>
          <label for="bc2" className='cardlabel'><span>Dabit Card</span></label>
        </div>
      </div>
      <div className="input-group">
        <div className="input-box">
          <input type="tel" placeholder="Card Number" required className="name"
            value={cardnumber} 
            onChange={(e)=>setcardnumber(e.target.value)}/>
          <i className="fa fa-credit-card icon"></i>
        </div>
      </div>
      <div className="input-group">
        <div className="input-box">
          <input type="tel" placeholder="Card CVC" required className="name"
            value={cvc} 
            onChange={(e)=>setcvc(e.target.value)}/>
          <i className="fa fa-user icon"></i>
        </div>
        <div className="input-box" id="validate">
          <select>
            <option>01</option>
            <option>02</option>
            <option>03</option>
            <option>04</option>
            <option>05</option>
            <option>06</option>
            <option>07</option>
            <option>08</option>
            <option>09</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
          </select>
          <select>
            <option>2023</option>
            <option>2024</option>
            <option>2025</option>
          </select>
        </div>
      </div>
      <div className="input-group">
        <div className="input-box">
          <button  className='cardbutton' onclick={handleclick}  >PAY NOW</button>
        </div>
      </div>
    </form>
  </div>
  
{/* <ol>
  <li>Full Name={fullname}</li>
  <li>Nick Name={nickname}</li>
  <li>Email={email}</li>
  <li>Card Number={cardnumber}</li>
  <li>CVC={cvc}</li>
  <li>DOB={dob}</li>
</ol> */}
 
</main>
    )
  }

export default Card