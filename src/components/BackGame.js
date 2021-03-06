const { Component } = require("react");


class BackGame extends Component {
    constructor() {
        super()
        this.state = {
            editMode: false,
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
    //     this.setState({platform: value})
    // }

    handleHours = (value) => {
        this.setState({hours: value})
    }

    toggleEdit = () => {
        this.setState({editMode: !this.state.editMode})
    }

    handleSave = () => {
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
            <div className='edit-mode'>
                <div className='backlog-item'>
                    <div className='game-card'>
                        <p id='title'><i>{this.props.game.title}</i></p>
                        <p id='hours'><i>{this.props.game.hours} hours remain</i></p>
                        <p id='platform'><i>{this.props.game.platform}</i></p>
                    </div>
                </div>
                <form className='game-card-edit'>
                    <h3>Edit {this.props.game.title}</h3>
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
                        type='number'
                        value={this.state.hours}
                        onChange={e => this.handleHours(e.target.value)}
                        placeholder={this.props.game.hours}
                        />
                    <div className='edit-controls'>
                        <button onClick={this.toggleEdit}>cancel</button>
                        <button onClick={this.handleSave}>save</button>
                    </div>
                </form>
            </div>
        ) : (
            <div className='backlog-item'>
                <div className='game-card'>
                    <p id='title'>{this.props.game.title}</p>
                    <p id='hours'>{this.props.game.hours} hours remain</p>
                    <p id='platform'>{this.props.game.platform}</p>
                    <div id='controls'>
                        <button onClick={() => this.props.completeGame(this.props.game.id, 1)}>complete</button>
                        <button onClick={this.toggleEdit}>edit</button>
                        <button onClick={() => this.props.deleteGame(this.props.game.id)}>delete</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default BackGame