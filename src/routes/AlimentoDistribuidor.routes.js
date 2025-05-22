import express from 'express';
import {
  createAlimentoDistribuidor,
  getAllAlimentoDistribuidor,
  deleteAlimentoDistribuidor,
} from '../controller/AlimentoDistribuidor.controller.js';


const router = express.Router();

router.get('/', getAllAlimentoDistribuidor); // GET do alimento-distribuidor
router.post('/adicionar', createAlimentoDistribuidor); // POST  do alimento-distribuidor
router.delete('/deletar/:alimentoId/:distribuidorId', deleteAlimentoDistribuidor); // DELETE do alimento-distribuidor/:alimentoId/:distribuidorId

export default router;