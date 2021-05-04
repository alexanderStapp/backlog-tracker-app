import BackGame from './BackGame'

function Backlog(props) {
    return props.gamesArr.length === 0 ? (
        <aside className='backlog'>
            <h3>Backlog</h3>
                <p id='empty-res'><i>add a game with the form to the left</i></p>
        </aside>
    ) : (
        <aside className='backlog'>
            <h3>Backlog</h3>
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
        </aside>
    )
}

export default Backlog;