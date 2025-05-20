import express from "express";
//pegando rotas
import alimentoRoutes from "./routes/Alimento.routes.js";
import receptorRoutes from "./routes/Receptores.routes.js";
import doacaoRoutes from "./routes/Doacao.routes.js";
import DistribuidorRoutes from "./routes/Distribuidor.routes.js";
import EstatisticaRoutes from "./routes/Estatistica.routes.js";
import dotenv from "dotenv";
//iniciando o env primeiro
dotenv.config();

const app = express();
const PORT = process.env.BACKEND_PORT || 3000;

//USANDO API JSON
app.use(express.json());

//USANDO ROTAS e definindo a inicial
app.use("/alimento",alimentoRoutes);
app.use("/receptor",receptorRoutes);
app.use("/distribuidor",DistribuidorRoutes);
app.use("/estatistica",EstatisticaRoutes);
app.use("/doacao",doacaoRoutes);


app.listen(PORT, async ()=>{
    console.log(`Rodando na porta http://localhost:${PORT}`);
});

