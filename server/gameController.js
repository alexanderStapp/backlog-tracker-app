let games = [
    {
        id: 0,
        completed: false,
        title: 'test game',
        platform: 'nintendo switch',
        hours: 400
    },
    {
        id: 1,
        completed: false,
        title: 'test game',
        platform: 'nintendo switch',
        hours: 400
    },
    {
        id: 2,
        completed: false,
        title: 'test game',
        platform: 'nintendo switch',
        hours: 400
    },
    {
        id: 3,
        completed: false,
        title: 'test game',
        platform: 'nintendo switch',
        hours: 400
    },
    {
        id: 4,
        completed: false,
        title: 'test game',
        platform: 'nintendo switch',
        hours: 400
    },
    {
        id: 5,
        completed: false,
        title: 'test game',
        platform: 'nintendo switch',
        hours: 400
    },
    {
        id: 6,
        completed: false,
        title: 'test game',
        platform: 'nintendo switch',
        hours: 400
    }
]
let id = 2

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
    },

    editComplete: (req, res) => {
        const {id, completed} = req.params
        const index = games.findIndex(e => e.id === +id)
        games[index].completed = completed
        res.status(200).send(games)
    }
}