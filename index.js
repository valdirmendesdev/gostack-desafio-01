const express = require('express');

//Instância do servidor
const server = express();

//Guarda o número de requisições feitas ao app
let numberOfReceivedRequests = 0;

//Guarda a lista de projetos criados
const projects = [];

//Configura o express para tratar o body das requisições como JSON
server.use(express.json());

//Middleware global para imprimir o número de requisições já feitas ao app
server.use((req, res, next) => {
  numberOfReceivedRequests++;
  console.log(`Número de requisições já recebidas: ${numberOfReceivedRequests}`);
  return next();
})

//Middleware para checar se o projeto com id informado existe
function checkProjectIdURLParam(req, res, next) {
  const project = projects.find(project => project.id == req.params.id);
  if (!project) {
    return res.status(400).json({message: 'Project does not exist'})
  }
  return next();
}

//Cria um novo projeto
server.post('/projects', (req, res) => {
  const newProject = {
    id: req.body.id,
    title: req.body.title,
    tasks: []
  };
  projects.push(newProject);
  return res.status(201).json(newProject);
});

//Retorna todos os projetos criados
server.get('/projects', (req, res) => {
  return res.json(projects);
})

//Retorna um projeto
server.get('/projects/:id', checkProjectIdURLParam, (req, res) => {
  const project = projects.find(project => project.id = req.params.id);
  return res.json(project);
})

//Atualiza o título de um projeto
server.put('/projects/:id', checkProjectIdURLParam, (req, res) => {
  const project = projects.find(project => project.id = req.params.id);
  project.title = req.body.title;
  return res.json(project);
})

//Exclui um projeto 
server.delete('/projects/:id', checkProjectIdURLParam, (req, res) => {
  const project = projects.find(project => project.id = req.params.id);
  const projectIndex = projects.indexOf(project);
  projects.splice(projectIndex,1);
  return res.send();
})

//Cria uma nova tarefa
server.post('/projects/:id/tasks', checkProjectIdURLParam, (req, res) => {
  const project = projects.find(project => project.id = req.params.id);
  project.tasks.push(req.body.title);
  return res.status(201).json(project);
})

server.listen(3000);