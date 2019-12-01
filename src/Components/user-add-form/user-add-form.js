import React, { Component } from 'react';
import { useMutation} from '@apollo/react-hooks';

import './user-add-form.css';

export default class UserAddForm extends Component {

  state = {
    label: ''
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    })
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { label } = this.state;
    this.setState({ label: '' });
/*this.props.addUser({variables:{name:label}});*/
  };

  render() {
    return (
      <form
        className="bottom-panel d-flex"
        onSubmit={this.onSubmit}>

        <input type="text"
               className="form-control new-todo-label"
               value={this.state.label}
               onChange={this.onLabelChange}
               placeholder="What needs to be done?" />

        <button type="submit"
                className="btn btn-outline-secondary">Add</button>
      </form>
    );
  }
}
