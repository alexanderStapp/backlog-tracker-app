import BackGame from './BackGame'

function Backlog(props) {
    return (
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