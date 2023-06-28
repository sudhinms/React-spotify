import React, { useState } from 'react'
import logo from "../assets/spo.png"
import MainContainer from '../styles/homeStyle'


function Home() {
  const [val,setVal]=useState(0);
const incrementVal=()=>{
    setVal(val+1)
}
  return (
    <MainContainer className='main'>
      <nav>
      <img src={logo} alt="" />
        <ul>
            <li>Premium</li>
            <li>Help</li>
            <li>Download</li>
            <li>|</li>
            <li>Sign up</li>
            <li>Login</li>
        </ul>
      </nav>
      <div className='container2'>
      <h1 className='centerItems'>Music for everyone.</h1>
      <h3 className='centerItems'>Count : {val}</h3>
      <button className='centerItems' onClick={incrementVal}>Increment</button>
      </div>
    </MainContainer>
  )
}

export default Home
