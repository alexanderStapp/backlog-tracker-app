import BackGame from './BackGame'

function Backlog(props) {
    return (
        <div>
            <h2>Backlog</h2>
            {props.gamesArr.map(game => {
                return (
                    <BackGame
                        game={game}
                        editGame={props.editGame}
                        deleteGame={props.deleteGame}
                        completeGame={props.completeGame}
                    />
                )
            })}
        </div>
    )
}

export default Backlog;