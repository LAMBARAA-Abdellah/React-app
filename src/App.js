import { useState, useEffect } from 'react';
import Header from './components/Header';
// import logo from './logo.svg';
import './App.css';
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
function App() {
  const [showAddTask, setShowTask] = useState(false)
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch('http://localhost:5000/tasks')
      const data = await res.json()
      console.log(data)
    }
    fetchTasks()

  }, [])
  // const name='Abdellah'
  // const x=true*
  //delete task 
  const deleteTask = (id) => {
    console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }
  //toggle reminder
  const toggleReminder = (id) => {
    console.log(id)
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }
  // add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
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
      <Header title="Task tracker" onAdd={() => setShowTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks}
        onDelete={deleteTask}
        onToggle={toggleReminder}
      /> : 'No Tasks to show'}
    </div>

  );
}

export default App;
