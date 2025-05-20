import { Router } from "express";
import AlimentoController from "../controller/Alimento.controller.js";

const alimentoRoutes = Router();
//READ das rotas
alimentoRoutes.get("/",AlimentoController.getAlimentoController);

//CREATE das rotas
alimentoRoutes.post("/cadastro",AlimentoController.createAlimentoController);

//UPDATE das rotas
alimentoRoutes.put("/atualizar/:id",AlimentoController.updateAlimentoController);

//DELETE das rotas
alimentoRoutes.delete("/deletar/:id",AlimentoController.deleteAlimentoController);

export default alimentoRoutes;