import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'black'
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: 'red' });
    }, 5000);
  }

  render() {
    return (
      <div className="container">
        <div
          className="box"
          style={{
            backgroundColor: this.state.color
          }}
        >
        </div>
      </div>
    );
  }
}

export default App;
