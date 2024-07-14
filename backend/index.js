const express = require('express')
const {todoSchema, updateSchema, deleteSchema, updateTodoSchema} = require("./types.js")
const {Todo} = require("./db.js")
const cors = require("cors")

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

app.post("/todo", async (req, res) => {
    const response = todoSchema.safeParse(req.body);
    if(!response.success){
        return res.json({
            success : false,
            msg : "Invalid Input Sent"
        })
    }

    const newTodo = await Todo.create({
        title : req.body.title,
        description : req.body.description,
        isPending : true
    })
    newTodo.save();

    res.json({
        success : true,
        msg : "Todo Added Successfully"
    })
})

app.get("/todos", async (req, res) => {
    const allTodosRes = await Todo.find({});
    const allTodos = []
    allTodosRes.map((td) => {
        allTodos.push({
            _id : td._id,
            title : td.title,
            description : td.description,
            isPending : td.isPending
        })
    })
    res.json({
        success : true,
        allTodos
    })
})

app.put("/completed", async (req, res) => {
    const response = updateSchema.safeParse(req.body);
    if(!response.success){
        return res.json({
            success : false,
            msg : "Wrong Todo id"
        })
    }

    await Todo.updateOne({
        _id : req.body.id
    },{
        isPending : false
    })

    res.json({
        success : true,
        msg : "Todo Marked as Done"
    })
})

app.delete("/deleted", async (req, res) => {
    const response = deleteSchema.safeParse(req.body);
    if(!response.success){
        return res.json({
            success : false,
            msg : "Wrong Todo id"
        })
    }

    await Todo.deleteOne({
        _id : req.body.id
    })

    res.json({
        success : true,
        msg : "Todo Deleted Successfully"
    })
})

app.put("/updated", async (req, res) => {
    const response = updateTodoSchema.safeParse(req.body);
    if(!response.success){
        return res.json({
            success : false,
            msg : "Invalid Inputs"
        })
    }

    await Todo.updateOne({
        _id : req.body.id
    },{
        title : req.body.title,
        description : req.body.description,
        isPending : req.body.isPending
    })

    res.json({
        success : true,
        msg : "Todo Updated Successfully"
    })
})

app.listen(port, () => {
    console.log(`Todo App backend running on port ${port}`)
})