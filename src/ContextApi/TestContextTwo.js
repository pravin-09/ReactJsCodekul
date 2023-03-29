import { useContext } from "react"
import { Pravin } from "./ContextApi"


function TestContextTwo(){

    // const number=useContext(MyContext)

    const {number,setNumber}=useContext(Pravin)

    return(
        <div>
            <h2>Context Two Component!!!</h2>
            <p>Number in ContextTwo : {number} </p>
        </div>
    )
}

export default TestContextTwo