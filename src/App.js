import { Component } from 'react';
import './App.css';
import axios from 'axios';
import Form from './components/Form';


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

  render() {
    return (
      <div className="App">
        <Form addGameFn={this.addGame}/>
      </div>
    );
  }
}

export default App;
