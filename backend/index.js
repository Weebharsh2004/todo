const express = require('express');
const {createTodos, updateTodos}= require('./types');
const {todo} = require('./db');
const cors = require('cors');
const app = express()
const port=3000

app.use(express.json());
app.use(cors());

app.post('/todo',async (req,res)=>{
    const createPayload = req.body;
    const parsePayload = createTodos.safeParse(createPayload);

    if(!parsePayload.success){
        res.status(411).json({
            msg:"wrong inputs hai saale",
        })

        return;
    }

    await todo.create({
        title:createPayload.title,
        description: createPayload.description,
        completed: false,
    })

    res.json({
        msg: "todo added successfully"
    })
})

app.get('/todos',async (req,res)=> {
    const todos= await todo.find({});

    res.json({
        todos
    })
})

app.put('/completed',async (req,res)=>{
    const updatePayload = req.body;
    const parsePayload = updateTodos.safeParse(updatePayload);

    if(!parsePayload.success){
        res.status(411).json({
            msg:'kya kar raha hai bhai galat inputs hain',
        })
        
        return
    }

    await todo.update({
        _id:req.id
    },{
        completed:true,
    })

    res.json({
        msg:"todos are completed "
    })
})

app.listen(port, ()=> {
    console.log('listening on port')
})
