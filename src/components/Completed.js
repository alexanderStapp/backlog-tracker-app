import CompGame from './CompGame'

function Completed(props) {
    return (
        <div>
            <h2>Completed Titles</h2>
            {props.gamesArr.map(game => {
                return (
                    <div>
                        <CompGame
                            game={game}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default Completed;