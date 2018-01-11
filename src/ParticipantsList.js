import React, { Component } from 'react';
import ParticipantsListHeader from './ParticipantsListHeader'
import ParticipantsListElement from './ParticipantsListElement'
import _ from 'lodash';
import './ParticipantsList.css';

class ParticipantsList extends Component {

  // returns an array, for each participant we return a particpant list element
  // Our participants do not have an id, so we will generate one for them.
  // index will be our key
  // ...todo uses the spread operator. It means we will pass in all the items from the todo.
  //      Same as before es6 doing: name={participant.name} emailAddress={particpant.emailAddress} phone={particpant.phone}
  //
  // () => <> - this is the same as before es6 doing this
  //    function(particpant, index) {
  //        return <ParticipantsListElement />
  //      }

  renderElements() {
    const props = _.omit(this.props, 'participants');

    return _.map(this.props.participants, (participant, index) =>  <ParticipantsListElement key={index} {...participant} {...props} />);
  }

  render() {
    return (
      <table className="table">
        <ParticipantsListHeader />
        {this.renderElements()}
      </table>
    );
  }
}

export default ParticipantsList;
