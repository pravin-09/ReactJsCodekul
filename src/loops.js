import React from "react";
function Demo(){

    const countries=['India','US','Japan']

    const results = [];
    if(countries.length>0){
      countries.forEach((country,index) => {
        results.push(
          <div>
          key={index}
            <p>{country}</p>        
          </div>
        );
      });

      for(let country of countries){
        results.push(
               <div>
                 <p>{country}</p>        
               </div>
             );
      }

      for(let country in countries){
        results.push(
               <div>
                 <p>{countries[country]}</p>        
               </div>,
             );
      }

      const person={
         name:"John",
         city:"Pune",
         email:"abc@gmail.com"
      }

    //   name : John

      for(let key in person){
        console.log(key+" : "+person[key]);
      }
  
    }

    return <div>{results.length>0 ? results : <p>No Data!!!</p> }</div>;
  }

  export default Demo