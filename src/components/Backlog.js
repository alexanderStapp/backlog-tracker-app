import BackGame from './BackGame'

function Backlog(props) {
    return (
        <aside className='backlog'>
            <h3>Backlog</h3>
            <div className='backlog-list'>
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
        </aside>
    )
}

export default Backlog;