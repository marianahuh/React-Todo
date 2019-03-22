import React from 'react';

class TodoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todo: ''
		};
	}

	handleChanges = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	submitTodo = e => {
		this.setState({ todo: '' });
		this.props.addTodo(e, this.state.todo);
	};

	render() {
		return (
			<form onSubmit={this.submitTodo}>
				<input
					onChange={this.handleChanges}
					type="text"
					name="todo"
					value={this.state.todo}
					placeholder="...todo"
				/>
				<button>Add Todo</button>
			</form>
		);
	}
}

export default TodoForm;
