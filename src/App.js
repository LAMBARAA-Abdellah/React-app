import Header from './components/Header';
// import logo from './logo.svg';
import './App.css';
import Tasks from './components/Tasks'
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

     {tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask}/>:'No Tasks to show'}
    </div>
    
  );
}

export default App;
