const { Component } = require("react");


class Form extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            platform: '',
            // priority: '',
            hours: ''
        }
    }

    handleTitle = (value) => {
        this.setState({title: value})
    }
    
    handlePlatform = (value) => {
        this.setState({platform: value})
    }

    // handlePriority = (value) => {
    //     this.setState({priority: value})
    // }

    handleHours = (value) => {
        this.setState({hours: value})
    }

    handleAdd = () => {
        this.props.addGameFn(
            this.state.title,
            this.state.platform,
            // this.state.priority,
            this.state.hours
        )
        this.setState({
            title: '',
            platform: '',
            hours: ''
        })
    }

    render() {
        return (
            <div className='add-game'>
                <h3>Add Game</h3>
                    <form className='form'>
                        <input
                            value={this.state.title}
                            onChange={e => this.handleTitle(e.target.value)}
                            placeholder='title'
                            />
                        <input
                            value={this.state.platform}
                            onChange={e => this.handlePlatform(e.target.value)}
                            placeholder='platform'
                            />
                        {/* <input
                            type="number"
                            step="1"
                            min="1"
                            // max={this.props.gamesArr.length + 1}
                            value={this.state.priority}
                            onChange={e => this.handlePriority(e.target.value)}
                            // placeholder='priority (1-999)'
                        /> */}
                        <input
                            type='number'
                            value={this.state.hours}
                            onChange={e => this.handleHours(e.target.value)}
                            placeholder='hours of gameplay remaining'
                            />
                        <button onClick={this.handleAdd}>Add to Backlog</button>
                    </form>
                </div>
        )
    }
}

export default Form