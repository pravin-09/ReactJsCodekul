import { useContext } from "react"
import { Pravin } from "./ContextApi"

function TestContextOne(){

    const {number,setNumber}=useContext(Pravin)

    const incrementValue=()=>{
        setNumber(number+1)
    }

    return(
        <div>
            <h2>Context One Component!!!</h2>
            <p>Number in ContextOne : {number} </p>
            <button type="button" onClick={incrementValue}>Add</button>
        </div>
    )
}

export default TestContextOne