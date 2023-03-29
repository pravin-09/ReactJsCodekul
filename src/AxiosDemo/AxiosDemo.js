
import axios from "axios";
import React,{ useEffect } from "react";
//sucessfully
function AxiosDemo(){

    const[userList,setUserList]=React.useState([])

    //get request 
    useEffect(()=>{
        axios.get("http://localhost:8080/get")
        .then(response=>response.data)
        .then(res=>{
            console.log(res)
            setUserList(res)
        })
    },[])

    return(
        <div>
            <h1>Axios Demo!!!</h1>
            <ul>
                {
                    userList.map((user)=>(
                        <>
                        <ul>name: {user.name}</ul>
                        <ul>address: {user.address}</ul>
                        </>
                    ))
                }
            </ul>
        </div>
    )
}

export default AxiosDemo