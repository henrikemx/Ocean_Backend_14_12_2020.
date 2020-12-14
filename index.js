const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json());

app.get('/mensagens', (req, res) => {
  res.send('Hello World!')
});

// CRUD
// Create, Read ( All or Single ), Update, Delete

const mensagem = [
    'Essa é a primeira mensagem',
    'Essa é a segunda mensagem'
];

// [READ] All - Ler todas as mensagens
app.get('/mensagens', (req, res) => {
  res.send(mensagens);
});

app.get('/mensagens', (req, res) => {
  res.send('Exibir a lista de mensagens.')
});

app.post('/mensagens', (req, res) => {
  const texto = req.body.texto;
  mensagem.push(texto);
  res.send('Mensagem criada com sucesso !!');
});

const port = 3000;

app.listen(port,() => {
  console.info(`Servidor rodando no endereço http://localhost:${port}`)
});