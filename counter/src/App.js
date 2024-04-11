
import './App.css';
import {useState} from 'react';


function App() {

  const [count,setCount] = useState(0)

  // let count =15
  const addValue =()=>{
    setCount(count+1)
  }
  const minusValue =()=>{
    setCount =(count -1)
  }
  
  return (
    <>
    <h1>Counter App</h1>
    <h1>Count : {count}</h1>
    <button onClick = {addValue}>Add</button>{' '}
    <button onClick={minusValue}>minus</button>
    <p>--------------------</p>
    </>
  );
}

export default App;
