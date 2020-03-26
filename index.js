const express = require('express');

const app = express();

app.listen(3000, () => console.log('Server Listening on port 3000'));

app.get("/atendimentos", (req,res) => res.send("Voce está na rota de atendimentos"));