import './App.css';
import {Component} from 'react'; 
import data from "./got.json"; 
import {CardList} from './components/card-list/card-list.component'; 
import {SearchBox} from './components/search-box/search-box.component'


class App extends Component {

  constructor() {
    super(); 
    this.state = {
      characters :[
      ], 
      searchField:''
    }; 
  }

  //runs after the component output has been rendered to the DOM
  componentDidMount() { 
    this.setState({characters: data});     
  }

  // method examines this.props, which are parameters passed down by the parent and this.state, which is internal to the component

  handleChange = (e) => {
    // arrow functions are lexically scoped, they bind the .this keyword 
    this.setState({searchField: e.target.value}); 
  }

  render() {
    const { characters, searchField} = this.state;  
    const filteredCharacters = characters.filter(character => character.name.toLowerCase().includes(searchField.toLowerCase())) 
    return (
      <div className="App">
        <h1>Game of Thrones Rolodex</h1>
        <SearchBox
          placeholder= 'search characters'
          handleChange={this.handleChange}
        />
        <CardList characters={filteredCharacters}>
        </CardList>
    </div>
  );
  }
}
export default App;
