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
				<input id = "task" type="text" placeholder="Add Task" value={text} onChange = {(e) => setText(e.target.value)}/>
			</div>
			<div className="form-control">
				<label htmlFor="day_time">Set Day & Time</label>
				<input id = "day_time" type="text" placeholder="Set Day and Time" value={day} onChange = {(e) => setDay(e.target.value)}/>
			</div>
			<div className="form-control form-control-check">
				<label >Set Reminder</label>
				<input type="checkbox" value={reminder} onChange = {(e) => setReminder(e.currentTarget.checked)}/>
			</div>
			<input type="submit" className="btn btn-block" value="Save Task"/>
		</div>
	</form>
  )
}

export default AddTask