import React, { useState } from "react";
// import CryptoJS from "crypto-js";
import "./card1.css";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import "react-toastify/dist/ReactToastify.css";
const notify = () => {
  toast("Your Booking is Succeed !");
};
var showdate = new Date();
function Card1() {
  var id = 1;
  const transaction_id = uuidv4();
  var cardtype;
  const [name, setname] = useState("");
  const [emailaddress, setemailaddress] = useState("");
  const [cardnumber, setcardnumber] = useState("");
  const [cvc, setcvc] = useState("");
  const [exMonth, setexMonth] = useState("");
  const [exYear, setexYear] = useState("");
  var date =
    showdate.getDate() +
    "/" +
    (showdate.getMonth() + 1) +
    "/" +
    showdate.getFullYear();
  var time = showdate.getHours() + ":" + showdate.getMinutes();

  const handleclick = (e) => {
    var ele = document.getElementsByName("pay");
    id += 1;
    const expireDate = exMonth + "/" + exYear;
    for (var i = 0; i < ele.length; i++) {
      if (ele[i].checked) cardtype = ele[i].value;
    }
    // const secretPass = "XkhZG4fW2t2W";
    //   cardnumber= CryptoJS.AES.encrypt(
    //   JSON.stringify(cardnumber),
    //   secretPass
    // ).toString()
    // e.preventDefault();
    const payment = {
      id,
      transaction_id,
      name,
      emailaddress,
      cardtype,
      cardnumber,
      expireDate,
      cvc,
      date,
      time,
    };
    console.log(payment);
    fetch("http://localhost:8082/payment/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payment),
    }).then(() => {
      console.log("New Student Added Successfully");
    });
  };
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
        <form action="/Success1" onSubmit={notify}>
          <h4>Account</h4>
          <div className="input-group">
            <div className="input-box">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="name"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
              <i className="fa fa-user icon"></i>
            </div>
            {/* <div className="input-box">
              <input
                type="text"
                placeholder="Nick Name"
                required
                className="name"
                value={nickname}
                onChange={(e) => setnickname(e.target.value)}
              /> */}
            {/* <i className="fa fa-user icon"></i> */}
            {/* </div> */}
          </div>
          <div className="input-group">
            <div className="input-box">
              <input
                type="email"
                placeholder="Email Adress"
                required
                className="name"
                value={emailaddress}
                onChange={(e) => setemailaddress(e.target.value)}
              />
              <i className="fa fa-envelope icon"></i>
            </div>
          </div>
          <div className="input-group">
            {/* <div
              className="input-box"
              value={dob}
              onChange={(e) => setdob(e.target.value)}
            >
              <h4> Date of Birth</h4>
              <input type="text" placeholder="DD" className="dob" />
              <input type="text" placeholder="MM" className="dob" />
              <input type="text" placeholder="YYYY" className="dob" />
            </div> */}
            {/* <div className="input-box">
              <h4> Gender</h4>
              <input
                type="radio"
                id="b1"
                name="gendar"
                checked
                className="radio"
              />
              <label for="b1" className="cardlabel">
                Male
              </label>
              <input type="radio" id="b2" name="gendar" className="radio" />
              <label for="b2" className="cardlabel">
                Female
              </label>
            </div> */}
          </div>
          <div className="input-group">
            <div className="input-box">
              <h4>Payment Details</h4>
              <input
                type="radio"
                name="pay"
                id="bc1"
                value="Credit"
                defaultChecked
                className="radio"
              />
              <label for="bc1" className="cardlabel">
                <span> Credit Card</span>
              </label>
              <input
                type="radio"
                name="pay"
                id="bc2"
                className="radio"
                value="Dabit"
              />
              <label for="bc2" className="cardlabel">
                <span>Dabit Card</span>
              </label>
            </div>
          </div>
          <div className="input-group">
            <div className="input-box">
              <input
                type="tel"
                placeholder="Card Number"
                required
                className="name"
                value={cardnumber}
                onChange={(e) => {
                  // const regexp = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
                  //           if (regexp.test(e.target.value))
                  //   {
                  //     return  setcardnumber(e.target.value);
                  //   }
                  // else
                  //   {
                  //     return "Invalid Card Number";
                  //   }
                  // const secretPass = "XkhZG4fW2t2W";
                  //     return setcardnumber(CryptoJS.AES.encrypt(
                  //   JSON.stringify(e.target.value),
                  //   secretPass
                  // ).toString())
                  return setcardnumber(e.target.value);
                }}
              />
              <i className="fa fa-credit-card icon"></i>
            </div>
          </div>
          <div className="input-group">
            <div className="input-box">
              <input
                type="tel"
                placeholder="Card CVC"
                required
                className="name"
                value={cvc}
                onChange={(e) => setcvc(e.target.value)}
              />
              <i className="fa fa-user icon"></i>
            </div>
            <div className="input-box" id="validate">
              <select
                value={exMonth}
                onChange={(e) => setexMonth(e.target.value)}
              >
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
              <select
                value={exYear}
                onChange={(e) => setexYear(e.target.value)}
              >
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>
                <option>2027</option>
              </select>
            </div>
          </div>
          <div className="input-group">
            <div className="input-box">
              <button className="cardbutton" onClick={handleclick}>
                PAY NOW
              </button>
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
  );
}

export default Card1;
