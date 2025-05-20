//vem express env e cors
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
//iniciando o env primeiro
dotenv.config();

const app = express();
const PORT = process.env.BACKEND_PORT || 3000;

const cors_config ={origin: '*' };

//USANDO API JSON
app.use(express.json());
app.use(cors(cors_config));


//pegando rotas
import alimentoRoutes from "./routes/Alimento.routes.js";
import receptorRoutes from "./routes/Receptores.routes.js";
import doacaoRoutes from "./routes/Doacao.routes.js";
import notificacoesRoutes from "./routes/Notificacoes.routes.js";
import distribuidorRoutes from "./routes/Distribuidor.routes.js";


//USANDO ROTAS e definindo a inicial
app.use("/alimento",alimentoRoutes);
app.use("/receptor",receptorRoutes);
app.use("/notificacoes",notificacoesRoutes);
app.use("/distribuidor",distribuidorRoutes);
app.use("/doacao",doacaoRoutes);


app.listen(PORT, async ()=>{
    console.log(`Rodando na porta http://localhost:${PORT}`);
});

