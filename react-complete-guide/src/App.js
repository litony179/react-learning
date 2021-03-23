import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Tony", age: "24"},
      {name: "Max", age: "29"}
    ]
  }

  switchNameHandler = () => {
    //console.log("clicked");
    //this.state.persons[0].name = "Alex"
    this.setState({
      persons: [
        {name: "Tony", age: "24"},
        {name: "Max", age: "49"}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, i am a react app</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobbies: racing</Person>
      </div>
      
    );
  }
}

export default App;
