import {useState} from 'react'

const AddTask = () => {
	const [text, setText] = useState('')
	const [day, setDay] = useState('')
	const [reminder, setReminder] = useState(false)
  return (
	<form>
		<div className="add-form">
			<div className="form-control">
				<label htmlFor="task">Task</label>
				<input id = "task" type="text" placeholder="Add Task"/>
			</div>
			<div className="form-control">
				<label htmlFor="day_time">Set Day & Time</label>
				<input id = "day_time" type="text" placeholder="Set Day and Time"/>
			</div>
			<div className="form-control form-control-check">
				<label htmlFor="reminder">Set Reminder</label>
				<input id = "reminder" type="checkbox"/>
			</div>
			<input type="submit" className="btn btn-block" value="Save Task"/>
		</div>
	</form>
  )
}

export default AddTask