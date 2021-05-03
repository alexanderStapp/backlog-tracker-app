function CompGame(props) {
    let today = new Date()
    return (
        <div className='completed-item'>
            <p>you completed {props.game.title} on {today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate()}</p>
            <p className='pop'>platform: {props.game.platform}</p>
            <p className='pop'>hours completed: {props.game.hours}</p>
        </div>
    )
}

export default CompGame