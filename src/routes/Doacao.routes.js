import { Router } from "express";
import DoacaoController from "../controller/Doacao.controller.js";


const doacaoRoutes = Router();
// READ das rotas
doacaoRoutes.get("/", DoacaoController.getDoacaoController);

// CREATE das rotas
doacaoRoutes.post("/cadastro", DoacaoController.createDoacaoController);

// UPDATE das rotas
doacaoRoutes.put("/atualizar/:id", DoacaoController.updateDoacaoController);

// DELETE das rotas
doacaoRoutes.delete("/deletar/:id", DoacaoController.deleteDoacaoController);

export default doacaoRoutes;