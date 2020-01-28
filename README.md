<h1 align="center">
    <strong>Bootcamp GoStack - Desafio 1</strong>
    <br />
    <br />
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>

<p align="center">
  Resolução do desafio 1 do bootcamp GoStack da RocketSeat
</p>

## Sobre o projeto

O desafio era desenvolver uma aplicação que permitisse criar, atualizar, deletar
e listar projetos. A aplicação também deveria permitir a criação de tarefas dentro de um projeto.

Também era parte do desafio, fazer uso de um middleware para contar o número de requisições atendidas pela aplicação e validar a existência do projeto a paritr
do id que foi informado na requisição.

## Rotas do projeto

|Método HTTP|         Rota        |            Descrição                     |
|-----------|---------------------|------------------------------------------|
| POST      | /projects           | Cria um projeto                          |
| GET       | /projects           | Lista todos os projetos                  |
| PUT       | /projects/:id       | Atualiza o título do projeto com o id    |
| DELETE    | /projects/:id       | Exclui o projeto com o id informado      |
| POST      | /projects/:id/tasks | Cria uma nova tarefa no projeto com o id |

## Para testar o projeto

Faça o clone do repositório
```bash
git clone git@github.com:valdirmendesgt/bootcamp-gostack-desafio-01.git
```

Na pasta do projeto, instale as dependências do projeto
```bash
yarn install
```

Execute o projeo
```bash
yarn start
```

Teste a aplicação com o endereço base [http://localhost:3000](http://localhost:3000)