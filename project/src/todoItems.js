import React, { Component } from "react";

/*
**This component handles the generation of the individual tasks
**Keys are passed over and two lists are generated
*/

class TodoItems extends Component {
	constructor(props) {
		super(props);

		this.createTasks = this.createTasks.bind(this);
		this.completeTasks = this.completeTasks.bind(this);

	}

	// Generates todoList tasks
	createTasks(item) {
		return <li key={item.key}>
		{item.text}
		<button onClick={() => this.finishTask(item)}>Finish</button>
		</li>;
	}

	// Generates completed tasks
	completeTasks(item) {
		return <li key={item.key}>
		{item.text}
		<button onClick={() => this.delete(item.key)}>Remove</button>
		</li>;
	}

	// Passes key back to the parent component to notify of completion of task
	finishTask(item) {
		this.props.complete(item.key);
	}


	// Passes key back to the parent component to notify of deletion of task
	delete(key) {
		this.props.remove(key);
	}

	render() {
		var todoEntries = this.props.todoEntries;
		var completedEntries = this.props.completedEntries;
		var listItems = todoEntries.map(this.createTasks);
		var completedItems = completedEntries.map(this.completeTasks);

		return(<div className="resultsList">
					<h1>To be completed</h1>
					<ul className="todoList">
						{listItems}
					</ul>
					<br/>
					<h1>Completed!</h1>
					<ul className="completedList">
						{completedItems}
					</ul>
				</div>
			)
	}
}

export default TodoItems;