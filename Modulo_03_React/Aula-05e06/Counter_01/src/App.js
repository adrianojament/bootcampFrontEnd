import React, { Component } from 'react';
import { Fragment } from 'react';
import Band from './components/Band';
import Counter from './components/Counter/Counter';
import Counter_02 from './components/Counter/Counter_02';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      currentCounter: 3,
      steps: 0,
    };
  }

  handleCount = (clickType) => {
    const { currentCounter, steps } = this.state;
    this.setState({
      currentCounter: currentCounter + (clickType === '+' ? 1 : -1),
      steps: steps + 1,
    });
  };

  render() {
    const { currentCounter, steps } = this.state;

    return (
      <Fragment>
        <h3>Band</h3>
        <Band />

        <h3>Counter 1</h3>
        <Counter />
        <Counter />
        <Counter />

        <h3>Counter 2</h3>
        <Counter_02
          onCount={this.handleCount}
          countValue={currentCounter}
          currentStep={steps}
        />
        <Counter_02
          onCount={this.handleCount}
          countValue={currentCounter}
          currentStep={steps}
        />
        <Counter_02
          onCount={this.handleCount}
          countValue={currentCounter}
          currentStep={steps}
        />
      </Fragment>
    );
  }
}
