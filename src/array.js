import React from 'react'

function array() {
    const [data, setData] = useState([ ]);

    let obj={
      firstname: "pravin",
      lastname: "Benni"
    }
    obj.push(setData);
    console.log(setData)
  return (
    <div>
   <p>{data}</p>
      
    </div>
  )
}

export default array
