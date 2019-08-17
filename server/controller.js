let players = [
    {
        id: 1,
        name: 'Michael Jordan',
        position: 'Guard',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUiS1vpy3nF7AoB8PUeslglYaEafl7RSig-wVlAJbajPiR2fGgEQ'
    },
    {
        id: 2,
        name: 'Magic Johnson',
        position: 'Guard',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRteYYlwwYlQhM_jUiXReGUOkOqpbDZFvP2-mT8HJ0BoUzEH-XxqQ'
    },
    {
        id: 3,
        name: 'Lebron James',
        position: 'Forward',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmP3SH8iSRpw5r49LWj86p321cueThhbMsGw8n5q2GEHka2obJ'
    },
    {
        id: 4,
        name: 'Kareem Abdul-Jabbar',
        position: 'Center',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtACyTukJfCUipJ_0eD00FcAR2XAgcskhyJoruLImxBVVkf7Tqxw'
    },
    {
        id: 5,
        name: 'Shaquille ONeal',
        position: 'Center',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvxrJG2eU4fn88OU-pdPS6wJe7PvniXD1Wi5cMwYoP17GB8Y1D'
    },
    {
        id: 6,
        name: 'Larry Bird',
        position: 'Forward',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ncofTT2B8EslvHsadSnPxLLRSmaMezwF5p5k04I_ioQ4ubJdhw'
    },
    {
        id: 7,
        name: 'Kobe Bryant',
        position: 'Guard',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc1j95KI_z6JbF_U0KiMOd9yKgYYFWz0eZO6Aadzxe0BUPFsOo7A'
    },
    {
        id: 8,
        name: 'Wilt Chamberlain',
        position: 'Center',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjiyXUV0qe_tQ4Hr0O2aSIeWFIK_1Mc8wiRdHbrjCuXLCKpiVTxQ'
    },
    {
        id: 9,
        name: 'Allen Iverson',
        position: 'Guard',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3IfYX5gegbdaLY3lHr24H-x52w7eHmdjoa2wKALOVAMNLnM4cKA'
    },
    {
        id: 10,
        name: 'Tim Duncan',
        position: 'Center',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfzqA7im5PeEA_z4Azoe8TejgmzlFBwXXoqlrx_yHoJWJrEuBi'
    }    
]

let selectedPlayers = []

module.exports = {
    getPlayers: (req, res) => {
        res.status(200).send(players)
    },
    createPlayer: (req, res)=>{
        players.length? id = players[players.length - 1].id + 1
        : id = 0
        const newPlayer = {
            name: req.body.name,
            position: req.body.position,
            image: req.body.image,
            id
        }
        players.push(newPlayer)
        res.status(200).send(players)
    },
    updatePlayer: (req, res) => {
        const {id} = req.params
        const updatedPlayer = req.body
        let myPlayer = players.findIndex(player => {
            return player.id === +id
        })

        players[myPlayer] = updatedPlayer
        
        res.status(200).send(players)
    },
    deletePlayer: (req, res) => {
        console.log('player')
        const {id} = req.params
        players = players.filter((players)=> players.id !== +id)
        res.status(200).send(players)
    }
}