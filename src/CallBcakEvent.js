import React, { useState } from "react";

function CallBackEvent() {
  const [message, setMessage] = React.useState('');

  const handlechange = (event) => {
    setMessage(event.target.value);
    console.log(message);
  };

  return (
    <div>
      <h2>Call Back Event</h2>
      <p>Message :{message} </p>
      <ChildComponent message={message} onInputChange={handlechange} />
    </div>
  );
}

function ChildComponent({ message, onInputChange }) {
  return (
    <div>
      <h2>Child Component</h2>
      <p>message:{message}</p>
      <input type="text"  onChange={onInputChange}/>
    </div>
  );
}

export default CallBackEvent;
