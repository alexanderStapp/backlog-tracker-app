const { Component } = require("react");


class BackGame extends Component {
    constructor() {
        super()
        this.state = {
            editMode: false,
            title: '',
            platform: '',
            hours: ''
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

    toggleEdit = () => {
        this.setState({editMode: !this.state.editMode})
    }

    handleSave = () => {
        console.log(this.props)
        const {id} = this.props.game
        const {title, platform, hours} = this.state
        this.props.editGame(id, title, platform, hours)
        this.toggleEdit()
        this.setState({
            title: '',
            platform: '',
            hours: ''
        })
    }



    render() {
        return this.state.editMode ? (
            <div>
                <input
                    value={this.state.title}
                    onChange={e => this.handleTitle(e.target.value)}
                    placeholder={this.props.game.title}
                />
                <input
                    value={this.state.platform}
                    onChange={e => this.handlePlatform(e.target.value)}
                    placeholder={this.props.game.platform}
                />
                <input
                    value={this.state.hours}
                    onChange={e => this.handleHours(e.target.value)}
                    placeholder={this.props.game.hours}
                />
                <button onClick={this.handleSave}>save</button>
            </div>
        ) : (
            <div>
                <p>{this.props.game.title}</p>
                <p>{this.props.game.platform}</p>
                <p>{this.props.game.hours}</p>
                <button onClick={() => this.props.completeGame(this.props.game.id, !this.props.game.completed)}>complete</button>
                <button onClick={this.toggleEdit}>edit</button>
                <button onClick={() => this.props.deleteGame(this.props.game.id)}>delete</button>
            </div>
        )
    }
}

export default BackGame