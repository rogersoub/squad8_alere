import express from "express";

const app = express();
const PORT = 3120;

app.use(express.json());

app.listen(PORT, ()=>{
    console.log(`Rodando na porta http://localhost:${PORT}`);
});