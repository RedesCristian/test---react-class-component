import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };
  render() {
    return (
      <div>
        <p>Level:{this.state.count}</p>
        <button onClick={this.handleIncrement} type="button">
          up
        </button>
        <button onClick={this.handleDecrement} type="button">
          down
        </button>
      </div>
    );
  }
}
export default Counter;
ReactDOM.render(<Counter />, document.getElementById('root'));
