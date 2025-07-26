// server.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let temas = [];

app.post("/receber-tema", (req, res) => {
  const { tema } = req.body;
  if (!tema) return res.status(400).send("Tema inválido");
  temas.push(tema);
  console.log("📥 Tema recebido:", tema);
  res.status(200).send("Tema salvo");
});

app.get("/temas", (req, res) => {
  res.json(temas);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
