import React, { Component } from 'react';
import classes from './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
  state = {
    persons: [
      {id: "asdf", name: "Tony", age: "24"},
      {id: "safsf", name: "Max", age: "29"}
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];

    persons[personIndex] = person
    this.setState({
      persons: persons
    });
  }

  deletePersonsHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = (event) => {
    const show = this.state.showPersons;
    this.setState({
      showPersons: !show
    })
  }


  render() {
    let persons = null;
    if(this.state.showPersons === true){
      persons = (
        <div>
          <Persons persons={this.state.persons} clicked={this.deletePersonsHandler} changed={this.nameChangedHandler} />
        </div>
      );

    }

    return (
      <div className={classes.App}>
        <Cockpit showPersons={this.state.showPersons} persons={this.state.persons} clicked={this.togglePersonsHandler}/>
        {persons}
      </div>
    );
  }
}

export default App;
