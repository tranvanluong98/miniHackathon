const mongoose =  require ('mongoose');

const Schema = mongoose.Schema;

let Playergame = new Schema({
    name1: {type:String , required:true},
    name2: {type:String , required:true},
    name3: {type:String , required:true},
    name4: {type:String , required:true},
    score :[Number]
})
module.exports = mongoose.model("Playergame",Playergame)
