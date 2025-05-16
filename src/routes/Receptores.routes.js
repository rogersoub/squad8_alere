import { Router } from 'express';
import  ReceptorController  from '../controller/Receptor.controller.js';

const receptoresRouter = Router();
//READ das rotas 
receptoresRouter.get("/", ReceptorController.getReceptorController);

//CREATE das rotas
receptoresRouter.post("/cadrastro", ReceptorController.createReceptorController)
//UPDATE das rotas
receptoresRouter.put("/atualizar:id", ReceptorController.uptadeReceptorController);

//DELETE das rotas  
receptoresRouter.delete("/deletar:id", ReceptorController.deleteReceptorController);

export default receptoresRouter;