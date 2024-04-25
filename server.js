
const express = require('express');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/login', (req, res) => {
  res.sendFile('index.html', { root: './public' });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === "login" && password === "123") {
    res.send("Login bem-sucedido!");
  } else {
    res.send("Falha no Login!");
  }
});
 const PORT=3000

app.listen(PORT, () => console.log(`Server rodando em http://localhost:${PORT}`));
