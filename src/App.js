import Header from './components/Header';
// import logo from './logo.svg';
import './App.css';
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from "react"
function App() {
  const [tasks,setTasks]=useState([
    {
      id:1,
      text:'doctors appointment',
      day:'feb 5th at 2:30pm',
      reminder:true,
    },
    {
      id:2,
      text:'doctors appointment',
      day:'feb 5th at 2:30pm',
      reminder:true,
    },
    {
      id:3,
      text:'doctors appointment',
      day:'feb 5th at 2:30pm',
      reminder:true,
    },
  ]) 
  // const name='Abdellah'
  // const x=true*
  //delete task 
  const deleteTask=(id)=>{
    console.log('delete',id)
    setTasks(tasks.filter((task)=>task.id !==id))
  }
  //toggle reminder
  const toggleReminder=(id)=>{
    console.log(id)
    setTasks(tasks.map((task)=>task.id===id?{...task,reminder:!task.reminder}:task))
  }
  // add task
  const addTask=(task)=>{
    console.log(task)
  }
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h1>Lambaraa {name} { x?'Yes':'No'}</h1>
    //     <h2>abdellah17lambaraa@gmail.com</h2>
    //     <Header title="full stack developper" />
    //   </header>
      
      
    // </div>
  
    <div className='container'>
      <Header title="Task tracker" />
      <AddTask onAdd={addTask}/>
     {tasks.length>0 ? <Tasks tasks={tasks} 
     onDelete={deleteTask}
     onToggle={toggleReminder}
     />:'No Tasks to show'}
    </div>
    
  );
}

export default App;
