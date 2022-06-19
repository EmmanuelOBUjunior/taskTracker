import { useState , useEffect} from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTasks, setShowAddTasks] = useState(false)
  const [tasks, setTasks] = useState([]);
  useEffect(()=>{
    const getTasks = async () =>{
      const taskFromServer = await fetchTasks();
      setTasks(taskFromServer)
    }

    getTasks();
  },[])


    //FETCH TASK
    const fetchTasks = async () =>{
      const res = await fetch('http://localhost:5000/tasks')
      const data = await res.json()
      
      return data
    }

    //ADD TASK
    const addTask = (task) =>{
      const id = Math.floor(Math.random() * 10000 +1 )
      const newTask = {id, ...task}

      setTasks([...tasks, newTask])
    }

    //DELETE TASK
    const deleteTask = (id) =>{
     setTasks(tasks.filter((task) => task.id !== id))
    }

    //TOGGLE TASK
    const toggleTask = (id) =>{
      // console.log(id)
      setTasks(tasks.map((task) => task.id === id ?{...task, reminder: !task.reminder} : task ))
    }

  return (
    <div className="container">
     <Header  onAdd = {() => setShowAddTasks(!showAddTasks)} showAdd = {showAddTasks}/>
     {showAddTasks && <AddTask onAddTask = {addTask}/>}
     {tasks.length > 0 ? <Tasks tasks = {tasks} onDelete = {deleteTask} onToggle= {toggleTask}/> : <h3>There is no task to show</h3>}
    </div>
  );
}

export default App;
 