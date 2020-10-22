import React, { Component, Fragment } from 'react';
// enabled
// onToggle
export default class Toggle extends Component {
  handleChange = (event) => {
    const { onToggle } = this.props;
    const isChecked = event.target.checked;
    onToggle(isChecked);
  };
  render() {
    const { enabled, description } = this.props;
    return (
      <Fragment>
        <div className="switch">
          <label>
            {description}
            <input
              type="checkbox"
              checked={enabled}
              onChange={this.handleChange}
            />
            <span className="lever" />
          </label>
        </div>
      </Fragment>
    );
  }
}
