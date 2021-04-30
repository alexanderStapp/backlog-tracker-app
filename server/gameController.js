let games = [
    {
        id: 1,
        completed: false,
        title: 'gametest',
        platform: 'xbone',
        hours: 40
    },
    {
        id: 2,
        completed: false,
        title: 'mario game',
        platform: 'wiiu',
        hours: 10
    }
]
let id = 3

module.exports = {
    getGames: (_req, res) => {
      res.status(200).send(games)  
    },

    addGame: (req, res) => {
        const {title, platform, hours} = req.body
        const game = {
            id: id++,
            completed: false,
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
        games[index].title = title
        games[index].platform = platform
        games[index].hours = hours
        res.status(200).send(games)
    }
}