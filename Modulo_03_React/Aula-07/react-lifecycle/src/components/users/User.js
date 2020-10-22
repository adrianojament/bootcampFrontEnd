import React, { Component, Fragment } from 'react';
import css from './user.module.css';
export default class User extends Component {
  render() {
    const { name, picture } = this.props.user;
    const { first, last } = name;
    const fullName = `${first} ${last}`;
    return (
      <Fragment>
        <div className={css.flexRow}>
          <img className={css.avatar} src={picture.large} alt={fullName} />
          <span>{first}</span>
        </div>
      </Fragment>
    );
  }
}
