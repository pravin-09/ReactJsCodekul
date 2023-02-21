import React, { useState } from "react";

export default function TableInput() {
  const [data, setData] = useState([]);

  let obj={
    firstname: "pravin",
    lastname: " Benni"  
  }
  obj.push(data);

  const [submit, setSubmit] = useState("");

  const submit1 = (e) => {
    setSubmit(e.target.value);
  };
  const submit2 = (e) => {
    setData(this.props.setData);
        console.log(e.target.value);
  };
  return (
    <div>
      <form onSubmit={submit2}>
        <label>First name:</label>
        <input type="text"/>

        <button type="button" value="" placeholder="Submit" onClick={submit1}>
          submit
        </button>
        <p>
          first name:{data}-{submit}
        </p>
      </form>

      <table>
        <tr>
          <th>first name</th>
          <th>last name</th>
        </tr>
        <tr>
          <td>{submit}</td>
        </tr>
      </table>
    </div>
  );
}
