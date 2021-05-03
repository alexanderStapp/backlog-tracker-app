function CompGame(props) {
    let today = new Date()
    return (
        <div className='completed-item'>
            <p>You completed <b>{props.game.title}</b> on {today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate()}</p>
            <p className='pop'><b>platform: </b>{props.game.platform}</p>
            <p className='pop'><b>hours completed: </b>{props.game.hours}</p>
        </div>
    )
}

export default CompGame