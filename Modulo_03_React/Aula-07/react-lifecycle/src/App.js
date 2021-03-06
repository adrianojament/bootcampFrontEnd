import React, { Component } from 'react';
import { Fragment } from 'react';
import Toggle from './components/toggle/Toggle';
import Users from './components/users/Users';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      showUsers: false,
    };
  }

  async componentDidMount() {
    const res = await fetch(
      'https://randomuser.me/api/?seed=rush&nat=br&results=10'
    );
    const json = await res.json();
    this.setState({
      users: json.results,
    });
  }

  handleShowUsers = (isChecked) => {
    this.setState({ showUsers: isChecked });
  };

  render() {
    const { showUsers, users } = this.state;
    return (
      <Fragment>
        <h1>React LifeCycle</h1>
        <Toggle
          description="Mostrar Usuários"
          enabled={showUsers}
          onToggle={this.handleShowUsers}
        />
        <hr />
        {showUsers && <Users users={users} />}
      </Fragment>
    );
  }
}
