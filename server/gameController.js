let games = [
    {
        id: 0,
        completed: 0,
        title: 'test game',
        platform: 'nintendo switch',
        hours: 400
    },
]
let id = 1

module.exports = {
    getGames: (_req, res) => {
      res.status(200).send(games)  
    },

    addGame: (req, res) => {
        const {title, platform, hours} = req.body
        const game = {
            id: id++,
            completed: 0,
            title,
            platform,
            hours
        }
        games.push(game)
        res.status(200).send(games)
    },
    
    deleteGame: (req, res) => {
        const {id} = req.params
        const index = games.findIndex(e => e.id === +id)
        games.splice(index, 1)
        res.status(200).send(games)
    },

    editGame: (req, res) => {
        const {id} = req.params
        const {title, platform, hours} = req.body
        const index = games.findIndex(e => e.id === +id)
        games[index].title = title || games[index].title
        games[index].platform = platform || games[index].platform
        games[index].hours = hours || games[index].hours
        res.status(200).send(games)
    },

    editComplete: (req, res) => {
        const {id, completed} = req.params
        const index = games.findIndex(e => e.id === +id)
        games[index].completed = completed
        res.status(200).send(games)
    }
}