import React, { Component } from "react";
import TodoItems from "./todoItems";
import "./TodoList.css"

/*
CreateTodoList class is the main app that maintains the array of 
of todoItems and completedItems. 

*/

class CreateTodoList extends Component {
	// Initializes the state of the arrays when the page is loaded. 

	constructor(props) {
		super(props);

		this.state = {
			todoItems: [],
			completedItems: []
		};

		this.addItem = this.addItem.bind(this);
		this.completeItem = this.completeItem.bind(this);
		this.removeItem = this.removeItem.bind(this);
	}


	/*addItem grabs the value that is refrenced from the variabl _inputElement. Using
	**the Date.now() as a unique key generator, new items are added on to the array of 
	**todoList objects	
	*/
	addItem(e) {

		if (this._inputElement !== "") {
			var newItem = {
				text: this._inputElement.value,
				key: Date.now()
			};

			this.setState((prevState) => {
				return {
					todoItems: prevState.todoItems.concat(newItem)
				};
				}

			);
		}


		this._inputElement.value = "";

		e.preventDefault();
	}

	/*
	**When a item is completed, the key value is passed to this function and the item is 
	**copied over from the todoItems array to the completedItems array
	*/

	addCompletedItem(key) {

		var newCompletedItem = this.state.todoItems.find(function (item) {
			return (item.key === key)
		});

		this.setState((prevState) => {
				return {
					completedItems: prevState.completedItems.concat(newCompletedItem)
				};
				}
			);
	}

	/*
	**completeItem removes the passed key value from the todoItems array. After this,
	**all pairs with empty key values are filtered out and the remaing values replace 
	**the todoItems array
	*/
	completeItem(key)  {

		this.addCompletedItem(key);
		var filteredItems = this.state.todoItems.filter(function (item) {	

			return  (item.key !== key)
		});

		this.setState({
			todoItems: filteredItems
		});

	}

	/*
	**removeItem does the same thing as completeItem but filters out values from the 
	**completedItems array
	*/
	removeItem(key) {

		var filteredItems2 = this.state.completedItems.filter(function (item) {

			return (item.key !== key)
		});

		this.setState({
			completedItems: filteredItems2
		});
	}

	render() {

		return (
			<div className="createTodoListMain">
				<div className="header">
					<form onSubmit={this.addItem}>
						<input ref={(a) => this._inputElement = a} 
								placeholder="Enter Task"></input>
						<button type="submit">Create Task</button>
					</form>
					<TodoItems todoEntries={this.state.todoItems}
								completedEntries={this.state.completedItems}
								complete={this.completeItem}
								remove={this.removeItem}/>
				</div>
			</div>
			);
	}
}

export default CreateTodoList;