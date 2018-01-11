import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ParticipantsList from './ParticipantsList';
import AddParticipant from './AddParticipant';
import _ from 'lodash';


var chance = require('chance').Chance();
var randFirstName = chance.first();

const participants = [];

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      participants
    }

    this.randParticipants(20);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Nord Software</h1>
        </header>
        <body className="App-body">
          <h1 className="App-intro">
            List of participants
          </h1>
          <div className="addParticipantsBar">
            <AddParticipant addParticipant={this.addParticipant.bind(this)}/>
          </div>
          <div>
            <ParticipantsList
              participants={this.state.participants}
              deleteParticipant={this.deleteParticipant.bind(this)}
            />
          </div>
        </body>
      </div>
    );
  }

  addParticipant(name, email, phone) {
    this.state.participants.push({
      name,
      email,
      phone
    });
    this.setState({ particpants: this.state.particpants });
  }

  deleteParticipant(name) {
    _.remove(this.state.participants, participant => participant.name === name);
    this.setState({ participants: this.state.participants});
  }

  randParticipants (reps) {

    for (var i=0; i<reps; i++) {
      var first = chance.first();
      var last = chance.last();

      this.addParticipant(
        first + " " + last,
        first + "." + last + "@gmail.com",
        chance.phone()
        );
    }
  }

}

export default App;
