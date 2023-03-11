import React from "react"
import { useNavigate } from "react-router-dom"

function Home(){
    const [message,setMessage]=React.useState('')
    const navigate=useNavigate()
    const status=true
    const handleChange=(event)=>{
        setMessage(event.target.value);
    }

    const gotoAbout=()=>{
        if ( status ){
            navigate(`/about/${message}`)
        }
  }

  const gotoservice=()=>{
    navigate(`/services/${message}`)
   
}

    return(
        <div>
            <h1>Home Component!!!</h1>
            <p>This is Home Component!!!</p>
            <p>message : {message}</p>
            <input type='text' onChange={handleChange}/>
            <button type="button" onClick={gotoservice}>go to services</button>
            <button type="button" onClick={gotoAbout}>go to about</button>

        </div>
    )

}

export default Home