import React from 'react'
import './success.css'
// import './Card'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// const notify=()=>{
//   toast("Payment is Success")
// }

function Success() {
  return (

    <div className='successbody'>
      {/* <ToastContainer
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
/> */}
 
{/* toast.success('🦄 Wow so easy!', {
position: "top-left",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
}); */}

    <h1 className='Successhading'>Payment Success</h1>
    <button className='successbutton'> <a href="Showticket" > Show Ticket</a></button>
</div>

  )
}

export default Success