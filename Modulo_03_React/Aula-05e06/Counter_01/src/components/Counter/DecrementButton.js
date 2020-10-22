import React, { Component } from 'react';
import { Fragment } from 'react';

export default class DecrementButton extends Component {
  handleButtonClick = () => {
    this.props.onDecrement('-');
  };

  render() {
    return (
      <Fragment>
        <button
          onClick={this.handleButtonClick}
          className="waves-effect waves-light btn red darken-4"
        >
          -
        </button>
      </Fragment>
    );
  }
}
