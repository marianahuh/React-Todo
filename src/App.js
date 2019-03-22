import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

const todos = [
	{
		name: 'Bake Cookies',
		id: 1528817077286,
		completed: false
	},
	{
		name: 'Eat Cookies',
		id: 1528817084358,
		completed: false
	}
];

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			todos
		};
	}

	toggleTodo = todoId => {
		this.setState({
			todos: this.state.todos.map(todo => {
				if (todoId === todo.id) {
					return {
						...todo,
						completed: !todo.completed
					};
				}
				return todo;
			})
		});
	};

	addTodo = (e, todo) => {
		e.preventDefault();
		const newTodo = {
			name: todo,
			id: Date.now(),
			completed: false
		};

		this.setState({
			todos: [...this.state.todos, newTodo]
		});
	};

	clearCompleted = e => {
		e.preventDefault();
		console.log('cleared');
		this.setState({
			todos: this.state.todos.filter(todo => !todo.completed)
		});
	};

	render() {
		return (
			<div>
				<div>
					<h1>TODOS:</h1>
					<TodoForm addTodo={this.addTodo} />
				</div>
				<TodoList
					todos={this.state.todos}
					toggleTodo={this.toggleTodo}
				/>
				<button onClick={this.clearCompleted}>
					Clear Completed
				</button>
			</div>
		);
	}
}

export default App;
