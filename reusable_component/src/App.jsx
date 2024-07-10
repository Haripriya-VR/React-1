import { useState } from 'react'
import './App.css'
import Cards from './components/Cards'

function App() {

  const persons =[{name:'Leanne Graham', email: 'laennegraham@abc.com'},
                  {name: 'Evrin Howell ' ,email:'evrinhowell@abc.com'}]

  return(
    <>
    <div className=''>
      <Cards persons = {persons}/>
    </div>
    </>
  )

}

export default App
