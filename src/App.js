import React, { Component } from 'react';
import TodoList from './components/TodoComponents/TodoList';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';


const todos = [
  {
    todos: '',
  },
  {
    task: 'Organize Garage',
    id: 1,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 2,
    completed: false
  }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todos,
      task: '',
      id: '',
      completed: ''
    };

    handlerChange = event => {
      console.log(event.target.value)
      this.setState({ [event.target.name]: event.target.value });
    };

    addTodo = event => {
      event.preventDefault();
      this.setState({
        todos: [
          ...this.state.todos,
          {
            task: this.state.task,
            id: this.state.id,
            completed: this.state.completed
          }
        ]
      });
    };
    // you will need a place to store your state in this component.
    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state
    render() {
      return (
        <div>
          <h1>Todo:</h1>
          <div>
            {this.state.todos.map(todo => (
              <Todo todo={todo} />
            ))}
          </div>
          <TodoForm
            addTodo={this.addTodo}
            onChange={this.handlerChange}
            task={this.state.task}
            id={this.state.id}
            completed={this.state.completed}
          />
        </div>
      );
    }
  }

  export default App;
