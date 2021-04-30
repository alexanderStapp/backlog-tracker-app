import { Component } from 'react';
import './App.css';
import axios from 'axios';
import Form from './components/Form';
import Backlog from './components/Backlog'


class App extends Component {
  constructor() {
    super()
    this.state = {
      gamesArr: []
    }
  }

  componentDidMount() {
    axios.get('/api/games')
    .then(res => this.setState({gamesArr: res.data}))
    .catch(err => console.log(err))
  }


  addGame = (title, platform, hours) => {
    axios.post('/api/games', {title, platform, hours})
    .then(res => this.setState({gamesArr: res.data}))
    .catch(err => console.log(err))
  }

  deleteGame = (id) => {
    axios.delete(`api/games/${id}`)
    .then(res => this.setState({gamesArr: res.data}))
    .catch(err => console.log(err))
  }

  editGame = (id, title, platform, hours) => {
    axios.put(`/api/games/${id}`, {title, platform, hours})
    .then(res => this.setState({gamesArr: res.data}))
    .catch(err => console.log(err))
  }
  
  render() {
    console.log(this.state.gamesArr)
    return (
      <div className="App">
        <Form addGameFn={this.addGame}/>
        <Backlog
          gamesArr={this.state.gamesArr}
          editGame={this.editGame}
          deleteGame={this.deleteGame}
        />
      </div>
    );
  }
}

export default App;
