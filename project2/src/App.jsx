import { useState } from 'react'
import Cards from './components/cards'
import './App.css'

function App() {
  let myobj = {
    place: 'washington DC'
  }
  let newArr =[1,2,3]

  return (
    <>
    <h1 className='text-3xl bg-green-500 p-5 rounded-md'>Card Component</h1>
    <Cards username='priya' obj ={myobj} arr ={newArr} />
    <Cards/>
    <Cards/>

    </>
  )
}

export default App;
