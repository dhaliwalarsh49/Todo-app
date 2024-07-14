const mongoose = require("mongoose")
mongoose.connect(process.env.MONGO_URI)

const TodoSchema = mongoose.Schema({
    title : String,
    description : String,
    isPending : Boolean
})

const Todo = mongoose.model('todos', TodoSchema);

module.exports = {Todo};