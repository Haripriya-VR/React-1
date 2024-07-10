import { useState,useEffect } from 'react'
import './App.css'
import { MdDeleteOutline } from "react-icons/md";
import { BsCheckLg } from "react-icons/bs";
function App() {
  const [isCompleteScreen, setIsCompleteScreen]= useState(false)
  const [allTodo, setAllTodo]= useState([])
  const [newtitle,setNewTitle]= useState('')
  const [newdescription,setNewDescription]= useState('')
  const [completedTodos,setCompletedTodo]=useState([])

  const todohandler=()=>{
    let newTodoitem ={
      title: newtitle,
      description: newdescription
    }
    let updatedTodo = [...allTodo]
    updatedTodo.push(newTodoitem)
    setAllTodo(updatedTodo)

    localStorage.setItem('todolist',JSON.stringify(updatedTodo))
  }
useEffect(()=>{
  let saveTodo = JSON.parse(localStorage.getItem('todolist'))
  let saveCompletedTodo = JSON.parse(localStorage.getItem('completedTodo'))

  if(saveTodo){
    setAllTodo(saveTodo)
  }
  if(saveCompletedTodo){
    setCompletedTodo(saveCompletedTodo)
  }
},[])

const deleteTodo =(index)=>{
  let reducedTodo = [...allTodo];
  reducedTodo.splice(index, 1);
  localStorage.setItem('todolist',JSON.stringify(reducedTodo))
  setAllTodo(reducedTodo)
}
const deleteCompletedTodo =(index)=>{
  let reducedTodo = [...completedTodos];
  reducedTodo.splice(index, 1);
  localStorage.setItem('completedTodo',JSON.stringify(reducedTodo))
  setAllTodo(reducedTodo)
}

const handleCompleteTodo =(index)=>{
  let now = new Date();
  let dd = now.getDate()
  let mm = now.getMonth()
  let yyyy = now.getFullYear()
  let h = now.getHours()
  let m = now.getMinutes()
  let s = now.getSeconds()
  let completedOn = dd + '-' + mm +"-"+yyyy + "at "+ h + ":" + m +' :'+s;
  let  filteredItem = {
    ...allTodo[index],
    completedOn:completedOn
  }
  let updatedCompletedTodo = [...completedTodos]
  updatedCompletedTodo.push(filteredItem)
  setCompletedTodo(updatedCompletedTodo)

  localStorage.setItem('completedTodo',JSON.stringify(updatedCompletedTodo))

  deleteTodo(index)

}


  return (
    <>
    <div className='App'>

      <h1>My Todos</h1>

      <div className='todo-wrapper'>
        <div className='todo-input'>
          <div className='todo-input-item'>
            <label htmlFor="">Title</label>
            <input type="text" value={newtitle} onChange={(e)=> setNewTitle(e.target.value)} placeholder='Enter your task '/>
          </div>
          <div className='todo-input-item'>
            <label htmlFor="">Description</label>
            <input type="text" value={newdescription} onChange={(e)=> setNewDescription(e.target.value)} placeholder='Enter description '/>
          </div>
          <div className='todo-input-item'>
            <button type="button" className='primaryBtn' onClick={todohandler}>Add</button>
          </div>
        </div>
        <div className='btn-area'>
          <button className={ ` secondaryBtn  ${isCompleteScreen === false && "active"}`} onClick={()=> setIsCompleteScreen( false)}>Todo</button>
          <button  className={` secondaryBtn  ${isCompleteScreen === true && "active"}`} onClick={()=> setIsCompleteScreen( true)}>Completed</button>
        </div>
        <div className='todo-list'>
        {isCompleteScreen === false && allTodo.map((item,index)=>{
          return(
            
            <div className='todo-list-item' key={index}>
              <div>




                
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              </div>
              <div>
                <MdDeleteOutline className='icon' onClick={()=>deleteTodo(index)} />
                <BsCheckLg className='icon' onClick={()=> handleCompleteTodo(index)} />
              </div>
            </div>
         
          )
          })}
                  {isCompleteScreen === true && completedTodos.map((item,index)=>{
          return(
            
            <div className='todo-list-item' key={index}>
              <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p><small>Completed On :{item.completedOn} </small></p>
              </div>
              <div>
                <MdDeleteOutline className='icon' onClick={()=>deleteCompletedTodo(index)} />
              </div>
            </div>
         
          )  
          })}
 </div>
      </div>
    </div>
      
    </>
  )
}

export default App
