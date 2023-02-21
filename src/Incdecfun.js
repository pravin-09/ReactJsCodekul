import React ,{useState }from "react";

function Incdec(){
    const[number,setnumber]=useState(0);

   const increment=()=>{
     setnumber(number+1);//state changes
     console.log(number+1);
   }

   const decrement=()=>{
    setnumber(number-1);//state changes
    console.log(number-1);

   }

   return(
    <div><p>by using functional component</p>
        <p>number is: {number}</p>
        <button type="button " onClick={increment}>add</button>
        <button typr="button" onClick={decrement}>sub</button>
        <ChildComponent/>
    </div>
   )
}

function ChildComponent(){

    return(
        <div>
            <h2>Child Component!!!</h2>
        </div>
    )
}

export default Incdec;