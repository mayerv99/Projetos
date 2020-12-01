// Importando e configurando

const express = require('express');
const app = express();

const {v4: uuidv4} = require('uuid');

const  cors = require('cors');

app.use(cors());
app.use(express.json( {extended: false} ));

const PORT = 3333;

app.listen(PORT, () => {
    console.log(`O servidor esta rodando na porta ${PORT}`)
})

const todos = []
// Script

// Exibir os todos
app.get("/", (req, res) => {
    res.status(200).json(todos)
})

// Inserir
app.post("/api/create", (req, res) => {
    const data = {name: req.body.name, completed: false, id: uuidv4()}
    todos.unshift(data)
    res.status(201).json(todos)
})

// Remover // precisa terminar
app.delete("/api/delete", (req, res) => {
    
})