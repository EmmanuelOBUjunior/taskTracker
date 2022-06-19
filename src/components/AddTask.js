const AddTask = () => {
  return (
	<form>
		<div className="add-form">
			<div className="form-control">
				<label htmlFor="">Task</label>
				<input type="text" placeholder="Add Task"/>
			</div>
			<div className="form-control">
				<label htmlFor="">Set Day & Time</label>
				<input type="text" placeholder="Set Day and Time"/>
			</div>
			<div className="form-control form-control-check">
				<label htmlFor="">Set Reminder</label>
				<input type="checkbox"/>
			</div>
		</div>
	</form>
  )
}

export default AddTask