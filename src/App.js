import React, { Component } from 'react';
import './App.css';
import CardList from "./components/card-list/card-list";
import Search from "./components/search/Search";


class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
    // bind is function that sets context of this to whatever passed to it
    // this.handleChange = this.handleChange.bind(this);
  }

  //componentDidMount calls whatver block of code is run in here when page loads
  //Using it here to get the data from url and then converting it to JSON so we can use it, then populating monsters array with the users
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response =>
      response.json()).then(users => this.setState({monsters: users}));
  }

handleChange = (e) => {
  // arrow functions bins this context to place they were called
  this.setState({searchField: e.target.value})
}

  render() {
    // destructuring
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
      <h1>Monsters Roladex</h1>
        <Search handleChange={this.handleChange} placeholder="Search Monsters.."/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
