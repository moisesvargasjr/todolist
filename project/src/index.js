import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CreateTodoList from "./createTodoList"

var destination = document.querySelector("#container");

ReactDOM.render(
	<div>
		<CreateTodoList/>
	</div>
	, destination
	);
