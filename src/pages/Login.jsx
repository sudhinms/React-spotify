import React, { useEffect, useState } from 'react'
import LoginMain from "../styles/loginStyle"

function Login() {
  

    const [val,setVal]=useState(" ");
    useEffect(()=>console.log(val),
    [val]);

  return (
    <LoginMain className='container1'>
    <div className='container2'>
      <h2 className='heading'>Login</h2>
      <form action="">
      <label htmlFor="username" className='labels'>Email</label>
      <input type="email" onChange={(e)=>setVal(e.target.value)} className='inp' placeholder='email' id='username'/>
      <label htmlFor="password" className='labels' id='label2'>Password</label>
      <input type="password" className='inp' placeholder='password' id='password'/>
      <label htmlFor="checkbtn" id='showpasswd'><input type="checkbox" id='checkbtn'/>  show password</label>
      <input type="submit" className='inp' value="SIGHN IN" id='submitbtn'/>
      </form>
      <h5 className='para1'>Forget <a href="">username/password?</a></h5>
      <h5 className='para2'>Don't have an account? <a href="">Sign up</a></h5>
    </div>
    </LoginMain>
  )
}

export default Login
