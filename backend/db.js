const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://ronin2004:Harsh2004@cluster0.xvv4ezm.mongodb.net/todos")

const schema= mongoose.Schema({
    title:{type: String, required: true},
    description: {type: String, required: true},
    completed:{type: Boolean}
})

const todo= mongoose.model('todos', schema);

module.exports ={
    todo: todo
 }

// mongodb+srv://ronin2004:Harsh2004@cluster0.xvv4ezm.mongodb.net/todos