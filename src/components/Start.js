import React from 'react'
import './Start.css'


function Start() {
  return (
    <main className='startmain'><div class="startbox">
    <h1 className='starth1'>Choose Payment Type</h1>
    <ol className='startol'> 
        <li className='startli'> <a className='starta' href='/Card'>Card</a> </li>
        <li className='startli'> <a className='starta' href='/Upi'>UPI</a> </li>
    </ol>
</div>
</main>
  )
}

export default Start