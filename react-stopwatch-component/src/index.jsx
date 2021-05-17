import React from 'react';
import ReactDOM from 'react-dom';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timer: 0 };
    this.tick = this.tick.bind(this);
  }

  // componentDidMount() {
  //   this.timerId = setInterval(
  //     () => this.tick(),
  //     1000
  //   );
  // }

  tick() {
    this.timerId = setInterval(
      () => this.tick(),
      1000
    );
  }

  render() {
    return (
      <div>
        {this.state.timer}
        <i onClick={this.tick} className="fas fa-play"></i>
      </div>
    );
  }
}

ReactDOM.render(
  <Stopwatch />,
  document.getElementById('root')
);
