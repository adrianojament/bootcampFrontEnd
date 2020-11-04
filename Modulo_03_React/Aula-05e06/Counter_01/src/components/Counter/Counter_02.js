import React, { Component } from 'react';
import css from './counter.module.css';
import DecrementButton from './DecrementButton';
import IncrementButton from './IncrementButton';
import Steps from './Steps';
import Value from './Value';
// countValue={currentCounter}
// currentStep={steps}

export default class Counter_02 extends Component {
  handleButtonClick = (clickType) => {
    this.props.onCount(clickType);
  };

  render() {
    const { countValue, currentStep } = this.props;
    return (
      <div className={css.counterContainer}>
        <DecrementButton onDecrement={this.handleButtonClick} />
        <Value value={countValue} />
        <IncrementButton onIncrement={this.handleButtonClick} />
        <Steps value={currentStep} />
      </div>
    );
  }
}