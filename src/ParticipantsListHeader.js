import React, { Component } from 'react';
import './ParticipantsList.css';

class ParticipantsListHeader extends Component {

  render() {
    return (
      <thead>
        <tr className="listHeaderRow">
          <th>Name</th>
          <th>E-mail address</th>
          <th>Phone number</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
    );
  }
}

export default ParticipantsListHeader;
