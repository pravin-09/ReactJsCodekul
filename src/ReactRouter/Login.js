import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Login() {

    
    const email1="pravin";
    const pass1=123;
    const navigate1=useNavigate()
    const [email,setEmail]=useState()

    const [password,setPassword]=useState('')
    const [allentry, setAllEntry] = useState([])
    
    const form=(event)=>{
        setEmail([event.target.value])
        console.log(email)
    }
    const form2=(event)=>{
        setPassword([event.target.value])
    }
    const submit=(e)=>{
        e.preventDefault()
        
        if(email1==email && password==pass1){
            const name=email+pass1
            navigate1(`/loginpage/${name}`)
            

           }else{
            alert("invalid input data")
        }
    }   
  return (
    <div>
    
    <p>Username, Password</p>
    <form action='' onSubmit={submit}>
    <input type='text' name='email' id='email'  onChange={form} placeholder=' username ' />
    <input type='password' name='password' id='password'   onChange={form2} placeholder=' password '  />
    <button type='submit' >login</button> 
    </form>
    
      
    </div>
  )
}

export default Login
