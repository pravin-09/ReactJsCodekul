import { useContext } from "react"
import { MyContext } from "./ContextApi"
function TestContextTwo(){

    // const number=useContext(MyContext)

    const {number,setNumber}=useContext(MyContext)

    return(
        <div>
            <h2>Context Two Component!!!</h2>
            <p>Number in ContextTwo : {number} </p>
        </div>
    )
}

export default TestContextTwo