
import React from "react";
import axios from "axios";
//sucessfully
function AxiosPostDemo(){

    const postObj={
       
        address:'',
        name:''
    }

    const[data,setData]=React.useState(postObj)

    const[display,setDisplay]=React.useState()

    const handleChange=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }

    const submitData=()=>{
        
        
    }

    return(
        <div>
            <form>
                {/* <label>UserID : </label>
                <input type='text' name='userId' onChange={handleChange}/> */}

                <label>Address : </label>
                <input type='text' name='address' onChange={handleChange}/>

                <label>name : </label>
                <input type='text' name='name' onChange={handleChange}/>

                <button type="button" onClick={submitData}>Submit</button>
            </form>

            {display ? (<div>
                <h2>New User Added: </h2>
                {/* <p>User Id: {display.userId}</p> */}
                <p>address: {display.address}</p>
                <p>name: {display.name}</p>
            </div>):""}
            
        </div>
    )
}

export default AxiosPostDemo