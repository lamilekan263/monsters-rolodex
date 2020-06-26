import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters:[],
      searchValue : '' 
    }

  }
  handleChange = (e) =>{
    this.setState({searchValue : e.target.value})
      }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users =>this.setState({monsters : users}))
  }
  
  render(){
    const {monsters, searchValue} = this.state;
    const filteredMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchValue.toLowerCase()))
    return(
      <div>
        <h1>Monster Rolodex</h1>
          <SearchBox placeholder= "search Monster" handleChange ={this.handleChange} />
          <CardList monsters={filteredMonster} />
            
          
      </div>
    )
  }
}

export default App;
