import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: [],
      newTask: '',
    };
  }
  handleInputChange = e => {
    e.preventDefault();
    this.setState({
      newTask: e.target.value,
    });
  };
  handleAddTask = () => {};
  hsndleClick = () => {};

  render() {
    return (
      <div>
        <form>
          <input type="text" />
          <button>Add Task</button>
        </form>
        <div>
          <ul>
            <li></li>
            <button>Mark as complete!</button>
          </ul>
        </div>
      </div>
    );
  }
}
export default TodoList;
ReactDOM.render(<TodoList />, document.getElementById('root'));
