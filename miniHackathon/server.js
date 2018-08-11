const express = require('express');
const server = express();
const hdb = require('express-handlebars')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const playergame = require('./models/playerModel')


server.use(bodyParser.urlencoded({extended: false}))
server.engine('handlebars', hdb({defaultLayout: 'main'}));
server.set('view engine', 'handlebars');
server.use(express.static("./css"));



server.get('/', (req, res) => {
    res.render('typeplayer')
})


server.get('/games',(req,res)=>{
    console.log(name);
    res.render('playgame',{
        name1:name.name1,
        name2:name.name2,
        name3:name.name3,
        name4:name.name4
    })
})

mongoose.connect('mongodb://localhost/MINIHACKATHON',(err)=>{
    if(err) console.error(err)
    else console.log("success db")
})
var name = {};
server.post('/add/player', (req,res)=>{

    var Player  = {
        name1:req.body.player1,
        name2:req.body.player2,
        name3:req.body.player3,
        name4:req.body.player4
    }
    
   name = Player;
    playergame.create(Player, (err, namePlayerCreated)=>{
        if(err) res.status(500).send({success: 0 , errMes: err})
        else res.status(201).send({success:1 , namePlayerCreated})

    });
});



server.listen(6969, (err) => {
    if (err) console.err(err)
    else
        console.log('success at port 6969!')
})