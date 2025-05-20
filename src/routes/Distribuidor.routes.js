import { Router } from "express";
//classe controller
import DistribuidorController from "../controller/Distribuidor.controller.js";

const distribuidorRoutes = Router();
//READ das rotad
distribuidorRoutes.get("/",DistribuidorController.getDistribuidorController);

//CREATE das rotas
distribuidorRoutes.post("/cadastro",DistribuidorController.createDistribuidorController);

//UPDATE das rotas
distribuidorRoutes.put("/atualizar/:id",DistribuidorController.updateDistribuidorControlller);

//DELETE das rotas
distribuidorRoutes.delete("/deletar/:id",DistribuidorController.deleteDistribuidorController);

export default distribuidorRoutes;