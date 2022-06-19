import { useState } from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
      {
        id: 1,
        text : "Doctor's Appointment",
        day : "Feb 5th at 2:30pm",
        remainder: true
      },
      {
        id: 2,
        text : "Meeting at School",
        day : "Feb 6th at 1:30pm",
        remainder: true
      },
      {
        id: 3,
        text : "Food Shopping",
        day : "Feb 5th at 2:30pm",
        reminder: false,
      }
    ]);

    //DELETE TASK
    const deleteTask = (id) =>{
      setTasks(tasks.filter((task) => task.id !== id))
    }

    //TOGGLE TASK
    const toggleTask = (id) =>{
      setTasks(tasks.map((task) => task.id === id ?{...task, reminder: !task.reminder} : tasks ))
    }

  return (
    <div className="container">
     <Header/>
     {tasks.length > 0 ? <Tasks tasks = {tasks} onDelete = {deleteTask} onToggle= {toggleTask}/> : <h3>There is no task to show</h3>}
    </div>
  );
}

export default App;
 