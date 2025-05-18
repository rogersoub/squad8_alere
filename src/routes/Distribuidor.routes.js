import { Router } from "express";
import DistribuidorController from "../controller/Distribuidor.controller.js";

const DistribuidorRoutes = Router();
//READ das rotas
DistribuidorRoutes.get("/",DistribuidorController.getDistribuidorController);

//CREATE das rotas
DistribuidorRoutes.post("/cadastro",DistribuidorController.createDistribuidorController);

//UPDATE das rotas
DistribuidorRoutes.put("/atualizar/:id",DistribuidorController.updateDistribuidorController);

//DELETE das rotas
DistribuidorRoutes.delete("/deletar/:id",DistribuidorController.deleteDistribuidorController);

export default DistribuidorRoutes;