const {mongoose} = require("./index.js")
let todoSchema = mongoose.Schema({
    user:String , 
    content:String,
    completed : Boolean
})

let Todo = mongoose.model("Todo",todoSchema); 
module.exports = Todo