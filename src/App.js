import { useState , useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  const [showAddTasks, setShowAddTasks] = useState(false)
  const [tasks, setTasks] = useState([]);
  useEffect(()=>{
    const getTasks = async () =>{
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer)
    }

    getTasks();
  },[])


    //FETCH TASKS
    const fetchTasks = async () =>{
      const res = await fetch('http://localhost:5000/tasks')
      const data = await res.json()
      
      //console.log(data)
      return data
    }


     //FETCH TASK
     const fetchTask = async (id) =>{
      const res = await fetch(`http://localhost:5000/tasks/${id}`)
      const data = await res.json()
      
      //console.log(data)
      return data
    }

    //ADD TASK
    const addTask = async(task) =>{
      const res = await fetch('http://localhost:5000/tasks',{
        method: "POST",
        headers:{
          'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
      })
      
      const data = await res.json()

      setTasks([...tasks, data])
      
      // const id = Math.floor(Math.random() * 10000 +1 )
      // const newTask = {id, ...task}

      // setTasks([...tasks, newTask])
    }

    //DELETE TASK
    const deleteTask = async (id) =>{
      await fetch(`http://localhost:5000/tasks/${id}`,{
          method: "DELETE",
        })

     setTasks(tasks.filter((task) => task.id !== id))
    }

    //TOGGLE REMINDER
    const toggleTask = async (id) =>{
      const taskToToggle = await fetchTask(id);
      const updTask = {...taskToToggle, reminder:!taskToToggle.reminder}

      const res = await fetch(`http://localhost:5000/tasks/${id}`,{
        method: "PUT",
        headers:{
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updTask)
      })

      const data = await res.json()

      setTasks(tasks.map((task) => task.id === id ?{...task, reminder: data.reminder} : task ))
    }

  return (
    <Router>
    <div className="container">
     <Header  onAdd = {() => setShowAddTasks(!showAddTasks)} showAdd = {showAddTasks}/>
     <Routes>
     <Route path = '/' exact render= {(props) =>{
      <>
      {showAddTasks && <AddTask onAddTask = {addTask}/>}
     {tasks.length > 0 ? <Tasks tasks = {tasks} onDelete = {deleteTask} onToggle= {toggleTask}/> : <h3>There is no task to show</h3>}
      </>
     }  
     }/>
     <Route path = '/about' component= {About}/>
     </Routes>
     <Footer/>
    </div>
    </Router>
  );
}

export default App;
 