import CompGame from './CompGame'

function Completed(props) {
    return (
        <div className='completed'>
            <h3>Completed Titles</h3>
            {props.gamesArr.map(game => {
                return (
                    <div>
                        <CompGame
                            game={game}
                            completeGame={props.completeGame}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default Completed;