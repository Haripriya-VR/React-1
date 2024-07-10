
import './App.css';
import {useState ,useEffect } from 'react';

function App() {

  const [count,setCount] = useState(0)
  const [color,setColor]= useState("black")
  const [boom ,setBoom] = useState(false)

  useEffect(()=>{
    setBoom(false)
    const id = setTimeout(()=>{
      setBoom(true)
    },4000)

    return ()=>{
      clearTimeout(id)
    }
   
  },[count])



  const addValue =()=>{
    setCount(count+1)
  }
  const minusValue =()=>{
    setCount(count -1)
  }
  
  return (
    <>
    <h1>Counter App</h1>
    <h1 style={{color}}>Count : {count}</h1>
    <button onClick = {addValue}>Add</button>{' '}
    <button onClick={minusValue}>minus</button>
    
    <p>--------------------</p>
    <button onClick={()=> setColor('green')} >green </button>
    <h2>Boom: {boom ? "BOOM!" : "Waiting..."}</h2>

    </>
  );
}

export default App;



