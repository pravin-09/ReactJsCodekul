
import React from "react"
function ReadInput(){

    const[firstName,setFirstName] =React.useState('')
    const[lastName,setLastName] =React.useState('')

    const handleFirstInput=(event)=>{
        console.log(event.target);
        setFirstName(event.target.value)
    }

    const handleSecondInput=(event)=>{
        console.log(event.target);
        setLastName(event.target.value)
    }

    return(
        <div>
            <h1>Read Input!!!</h1>
            <label>FirstName : </label>
            <input type='text' name="firstName" onChange={handleFirstInput}/>
            <label>LastName : </label>
            <input type='text' name="lastName" onChange={handleSecondInput}/>
            <p>FirstName : {firstName}</p>
            <p>LastName : {lastName}</p>
        </div>
    )
}

export default ReadInput