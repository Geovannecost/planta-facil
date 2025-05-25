const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const plantas = [
  {
    id: 1,
    nome: "Samambaia",
    descricao: "Linda planta ornamental.",
    imagem: "https://via.placeholder.com/300x200",
    preco: 30,
    estado: "SP"
  },
  {
    id: 2,
    nome: "Cacto",
    descricao: "Pouca água, ideal para iniciantes.",
    imagem: "https://via.placeholder.com/300x200",
    preco: 20,
    estado: "BA"
  },
  {
    id: 3,
    nome: "Orquídea",
    descricao: "Floresce o ano todo.",
    imagem: "https://via.placeholder.com/300x200",
    preco: 45,
    estado: "MG"
  }
];

app.get("/plantas", (req, res) => {
  res.json(plantas);
});

app.listen(3001, () => {
  console.log("Servidor rodando em http://localhost:3001");
});