import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isOn: !this.state.isOn });
  }

  render() {
    const isOn = this.state.isOn;
    let div;
    if (isOn) {
      div = <div className="background">
        <div onClick={this.handleClick} className="toggle-switch"><input type="checkbox"></input><span>on</span></div>
      </div>;
    } else {
      div = <div className="background background-dark">
        <div onClick={this.handleClick} className="toggle-switch"><input type="checkbox"></input><span className="white-text">off</span></div>
      </div>;
    }
    return (
      <div>
        {div}
      </div>
    );
  }
}

export default ToggleSwitch;
