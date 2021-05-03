function CompGame(props) {
    let today = new Date()
    return (
        <div>
            <p>you completed {props.game.title} on {today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate()}</p>
        </div>
    )
}

export default CompGame