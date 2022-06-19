const tasks = [
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
		remainder: false,
	}
]

const Tasks = () => {
  return (
	<>
		{tasks.map((task) =>(
			<h3 key={task.id}>{task.title}</h3>
		))}
	</>
  )
}

export default Tasks