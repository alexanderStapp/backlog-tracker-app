import { Component } from 'react';
import './App.css';
import axios from 'axios';
import Form from './components/Form';
import Backlog from './components/Backlog'
import Completed from './components/Completed'


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

  completeGame = (id, completed) => {
    axios.put(`/api/games/${id}/${completed}`)
    .then(res => this.setState({gamesArr: res.data}))
    .catch(err => console.log(err))
  }

  render() {
    console.log(this.state.gamesArr)
    return (
      <div className="App">
        <header>
            <h1 className='header-title'>Backlog Tracker</h1>
            <nav className='nav-bar'>
              <h3>Home</h3>
              <h3>About</h3>
              <h3>Extension</h3>
              <h3>Login</h3>
            </nav>
        </header>
        <Backlog
          gamesArr={this.state.gamesArr.filter(game => game.completed === 0 || game.completed === '0')}
          editGame={this.editGame}
          deleteGame={this.deleteGame}
          completeGame={this.completeGame}
        />
        <div>
          <Form
            addGameFn={this.addGame}
            gamesArr={this.state.gamesArr}
            />
          <Completed
            gamesArr={this.state.gamesArr.filter(game => game.completed === '1')}
            completeGame={this.completeGame}
          />
        </div>
      </div>
    );
  }
}

export default App;
