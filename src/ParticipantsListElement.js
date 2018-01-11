import React, { Component } from 'react';
import './ParticipantsList.css';
import iconBin from './iconBin.svg';
import iconPen from './iconPencil.svg';

class ParticipantsListElement extends Component {

  //Not best practice, normally would set the state in top level component that handles it.
  //Should ideally be using REDUX architecture
  constructor(props) {
    super(props);
  }

  renderParticpants() {
    //we know our props have name,email,phone because we passed them in from participants list
    const { name, email, phone } = this.props;

    return (
      <tr className="row">
        <td className="dataName">{name}</td>
        <td className="dataEmail">{email}</td>
        <td className="dataPhone">{phone}</td>
        <td>
          <img src={iconPen} className="button" />
        </td>
        <td>
          <img src={iconBin} className="button" onClick={this.props.deleteParticipant.bind(this, this.props.name)}/>
        </td>
      </tr>
    );
  }


  render() {
    return (
      <tbody>
        {this.renderParticpants()}
      </tbody>
    );
  }


  onSave(event) {
    event.preventDefault();

    const oldName = this.props.name;
    const newName = this.refs.editName.value;
    const newEmail = this.refs.editEmail.value;
    const newPhone = this.refs.editPhone.value;

    this.props.saveParticipant(oldName, newName, newEmail, newPhone);
    this.setState({ isEditing: false });
  }

}

export default ParticipantsListElement;
