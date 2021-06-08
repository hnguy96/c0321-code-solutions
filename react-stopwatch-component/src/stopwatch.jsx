import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timer: 0, isIconClicked: true, isStopwatchClicked: true };
    this.startTimer = this.startTimer.bind(this);
    this.incrementTimer = this.incrementTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.clearTimer = this.clearTimer.bind(this);
  }

  startTimer() {
    this.timerId = setInterval(
      () => this.incrementTimer(),
      1000
    );
    this.setState({ isStopwatchClicked: !this.state.isStopwatchClicked, isIconClicked: !this.state.isIconClicked });
  }

  incrementTimer() {
    this.setState({ timer: this.state.timer + 1 });
  }

  pauseTimer() {
    clearInterval(this.timerId);
    this.setState({ isStopwatchClicked: !this.state.isStopwatchClicked, isIconClicked: !this.state.isIconClicked });
  }

  clearTimer() {
    this.setState({ timer: 0 });
  }

  render() {
    const isIconClicked = this.state.isIconClicked;
    const isStopwatchClicked = this.state.isStopwatchClicked;
    const timer = this.state.timer;
    return (
      <div className="stopwatchContainer">
        <button
          onClick={isStopwatchClicked ? this.clearTimer : null}>
          {timer}
        </button>
        <span
          onClick={isIconClicked ? this.startTimer : this.pauseTimer}
          className={(isIconClicked ? 'playButton fa fa-play' : 'pauseButton fa fa-pause')}>
        </span>
      </div>
    );
  }
}

export default Stopwatch;
