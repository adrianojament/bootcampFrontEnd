import React, { Component } from 'react';
import { Fragment } from 'react';

export default class IncrementButton extends Component {
  handleButtonClick = () => {
    this.props.onIncrement('+');
  };

  render() {
    return (
      <Fragment>
        <button
          onClick={this.handleButtonClick}
          className="waves-effect waves-light btn green darken-4"
        >
          +
        </button>
      </Fragment>
    );
  }
}
