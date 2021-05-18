import React from 'react';
import ReactDOM from 'react-dom';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timer: 0, isIconClicked: false, isStopwatchClicked: false };
    this.startTimer = this.startTimer.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.clearTimer = this.clearTimer.bind(this);
  }

  handleClick() {
    if (!this.state.isIconClicked) {
      this.timerId = setInterval(
        () => this.startTimer(),
        1000
      );
      this.setState({ isIconClicked: !this.state.isIconClicked });
    } else {
      clearInterval(this.timerId);
      this.setState({ isStopwatchClicked: !this.state.isStopwatchClicked });
      this.pauseTimer();
    }
  }

  startTimer() {
    this.setState({ timer: this.state.timer + 1 });
  }

  pauseTimer() {
    this.setState({ isIconClicked: !this.state.isIconClicked });
  }

  clearTimer() {
    this.setState({ timer: 0, isStopwatchClicked: !this.state.isStopwatchClicked });
  }

  render() {
    const isIconClicked = this.state.isIconClicked;
    const isStopwatchClicked = this.state.isStopwatchClicked;
    let icon;
    let button;
    button = <button>{ this.state.timer }</button >;
    if (isIconClicked) {
      icon = <i onClick={this.handleClick} className="pauseButton fa fa-pause"></i>;
    } else {
      icon = <i onClick={this.handleClick} className="playButton fa fa-play"></i>;
      if (isStopwatchClicked) {
        button = <button onClick={this.clearTimer}>{this.state.timer}</button>;
      }
    }
    return (
      <div className="stopwatchContainer">
        {button}
        {icon}
      </div>
    );
  }
}

ReactDOM.render(
  <Stopwatch />,
  document.getElementById('root')
);
