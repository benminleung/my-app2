import React, { Component } from 'react';
import './AddParticipant.css';

class AddParticipant extends Component {

//refs are identifiers for the dom element
  render() {
    return (
      <form onSubmit={this.onAdd.bind(this)}>
        <input type="text" placeholder="Full name" ref="name"/>
        <input type="email" placeholder="E-mail address" ref="email"/>
        <input type="tel" placeholder="Phone number" ref="phone"/>
        <button>Add New</button>
      </form>
    );
  }

  onAdd(event) {
    //onSubmit refreshes the page when we load it, default onSumbit behavior. So we want to preven the default
    event.preventDefault();
    this.props.addParticipant(this.refs.name.value, this.refs.email.value, this.refs.phone.value);
    this.refs.name.value = "";
    this.refs.email.value = "";
    this.refs.phone.value = "";
  }
}

export default AddParticipant;
