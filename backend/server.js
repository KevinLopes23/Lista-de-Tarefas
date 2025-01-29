const express = require("express");
const cors = require("cors");

const app = express();

const port = 3000;

app.use(cors());
app.use(express.json());

let tarefas = [];

//Lista todas as tarefas
app.get("/tarefas", (req, res) => {
  res.json(tarefas);
});

//Adiciona uma nova tarefa
app.post("/tarefas", (req, res) => {
  const novaTarefa = req.body;
  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa);
});

//Rota para marcar uma tarefa como concluida
app.put("/tarefas/:id", (req, res) => {
  const idTarefa = req.params.id; 
  const tarefa = tarefas.find((t) => t.id === idTarefa); 
  if (tarefa) {
    tarefa.concluida = true;
    res.json(tarefa); 
  } else {
    res.status(404).send("Tarefa não encontrada");
  }
});

//Rota para deletar uma tarefa
app.delete("/tarefas/:id", (req, res) => {
  const idTarefa = req.params.id;
  tarefas = tarefas.filter((t) => t.id !== idTarefa);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`); //Mensagem de início do servidor na porta 3000
});
