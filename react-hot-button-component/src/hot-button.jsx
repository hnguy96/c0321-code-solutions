import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 1 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      return { counter: prevState.counter + 1 };
    });
  }

  render() {
    const counter = this.state.counter;
    let button;
    if (counter <= 3) {
      button = <button onClick={this.handleClick} className="darkPurple">Hot Button</button>;
    } else if (counter <= 6 && counter > 3) {
      button = <button onClick={this.handleClick} className="purple">Hot Button</button>;
    } else if (counter <= 9 && counter > 6) {
      button = <button onClick={this.handleClick} className="red">Hot Button</button>;
    } else if (counter <= 12 && counter > 9) {
      button = <button onClick={this.handleClick} className="orange">Hot Button</button>;
    } else if (counter <= 15 && counter > 12) {
      button = <button onClick={this.handleClick} className="yellow">Hot Button</button>;
    } else {
      button = <button onClick={this.handleClick} className="grey">Hot Button</button>;
    }
    return (
      <div>
        {button}
      </div>
    );
  }
}

export default HotButton;
