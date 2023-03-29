import {useState, createContext } from "react"
import TestContextOne from "./TestContextOne"
import TestContextTwo from "./TestContextTwo"

export const Pravin=createContext()

function ContextApi(){

    const[number,setNumber]=useState(0)

    const incrementNumber=()=>{
        setNumber(number+1)
    }

    return(
        <Pravin.Provider value={{number,setNumber}}>
        <div>
            <h1>Context API Demo!!!</h1>
            <p>Number in Parent : {number}</p>
            <button type="button" onClick={incrementNumber}>Add</button>
            <TestContextOne/>
            <TestContextTwo/>
        </div>
        </Pravin.Provider>
    )
}





export default ContextApi