const { Component } = require("react");


class Form extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            platform: '',
            hours: '',
        }
    }

    handleTitle = (value) => {
        this.setState({title: value})
    }
    
    handlePlatform = (value) => {
        this.setState({platform: value})
    }

    handleHours = (value) => {
        this.setState({hours: value})
    }

    handleAdd = () => {
        this.props.addGameFn(
            this.state.title,
            this.state.platform,
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
            <div>
                <h2>Add Game</h2>
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
                <input
                    value={this.state.hours}
                    onChange={e => this.handleHours(e.target.value)}
                    placeholder='hours'
                />
                <button onClick={this.handleAdd}>Add to Backlog</button>
            </div>
        )
    }
}

export default Form