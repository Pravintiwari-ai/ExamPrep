const mongoose= require('mongoose')
const sessionsSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },

},{
    timestamps:true
})
module.exports = mongoose.model('Session',sessionsSchema)