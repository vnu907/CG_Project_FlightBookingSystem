import React from "react";

import "./upi1.css";

function Upi1() {
  return (
    <body className="upibody">
      <main className="contaner">
        <div className="upiPaymentBox">
          <h1 className="upih1">UPI</h1>
          <form action="/Success1" className="upiform">
            <fieldset className="upifieldset">
              <h4 className="h4">UPI ID&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
              <input
                style={{
                  width: "360px",
                  height: "39px",
                }}
                className="upiinput"
                type="text"
                placeholder="Enter Your UPI ID"
                name="upi_id"
                required
              />
            </fieldset>
            <fieldset className="upifieldset">
              <h4 className="h4">AMOUNT&nbsp;&nbsp;</h4>
              <input
                style={{
                  width: "360px",
                  height: "39px",
                }}
                type="text"
                className="upiinput"
                placeholder="Enter Amount"
                name="amount"
                required
              />
            </fieldset>
            <button className="upibutton">Pay</button>
          </form>
        </div>
      </main>
    </body>
  );
}

export default Upi1;
