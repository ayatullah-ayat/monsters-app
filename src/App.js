import React,  { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list-component.js';
import { SearchBox } from './components/search-box/search-box-component.jsx';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      robots : [],
      inputText: ''
    }
  }  

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(resData => {
      this.setState({robots: resData})
    }).catch(err => console.log(err))
  }
 
  
  render(){

    const { robots, inputText } = this.state
    const filterRobots = robots.filter(robot => robot.name.toLowerCase().includes(inputText.toLowerCase()))
    return (
      <div className="App">
        <h1 className="title">Robot rololdex</h1>
        <SearchBox
          placeholder = "search robots!" 
          onChangeHandler = {e => this.setState({inputText: e.target.value})}
        />
        <CardList robots={ filterRobots }/>
      </div>
    );
  }
}

export default App;
