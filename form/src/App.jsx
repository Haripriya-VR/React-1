import React, { useState, useRef } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const inputRef = useRef(null);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name !== '') {
      console.log(name);
    } else {
      alert('Please enter your name');
    }
  };

  return (
   <div style={{display:'flex', justifyContent:'center', marginTop:'50px'}}>
     <form onSubmit={handleSubmit}>
      <label style={{fontWeight:800}}>
      Enter your name: <br />
        <input style={{padding:'11px', marginTop:'10px'}} type="text" value={name} onChange={handleChange} ref={inputRef} />
      </label> 
      <button style={{padding:'11px',marginTop:'10px', backgroundColor:'gray'}} type="submit">Submit</button>
    </form>
   </div>
  );
}
