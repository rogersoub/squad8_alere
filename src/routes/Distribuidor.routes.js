import { Router } from "express";
import DistribuidorController from "../controller/Distribuidor.controller.js";

const DistribuidorRoutes = Router();
//READ das rotas
DistribuidorRoutes.get("/",DistribuidorController.getdistribuidorController);

//CREATE das rotas
DistribuidorRoutes.post("/cadastro",DistribuidorController.createdistribuidorController);

//UPDATE das rotas
DistribuidorRoutes.put("/atualizar/:id",DistribuidorController.updatedistribuidorControlller);

//DELETE das rotas
DistribuidorRoutes.delete("/deletar/:id",DistribuidorController.deletedistribuidorController);

export default DistribuidorRoutes;