import React from "react"
import { useParams } from "react-router-dom"

function Services(){
    const {message}=useParams()
    return(
        <div>
            <h1>Services Component!!!</h1>
            <p>This is Services Component!!!</p>
            <p>Message:{message}</p>
        </div>
    )
}

export default Services