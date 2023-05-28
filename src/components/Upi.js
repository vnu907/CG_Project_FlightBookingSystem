import React from 'react'

import './upi.css'

function Upi() {
  return (
    <body className='upibody'>
    <main className='contaner'>
        
    <div className="upiPaymentBox">
        <h1 className="upih1">UPI</h1>
        <form action="/Success" className='upiform'>
            <fieldset className='upifieldset'><h4 className='h4'>UPI ID&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4><input className='upiinput' type="text" placeholder="Enter Your UPI ID" name="upi_id" required /></fieldset>
            <fieldset className='upifieldset'><h4 className='h4'>AMOUNT&nbsp;&nbsp;</h4><input type="text" className='upiinput' placeholder="Enter Amount" name="amount" required /></fieldset>
            <button  className='upibutton'>Pay</button>
        </form>
    </div>
   </main>
   </body>
  )
}

export default Upi