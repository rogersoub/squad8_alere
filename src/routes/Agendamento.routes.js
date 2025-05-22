import { Router } from 'express';
import  AgendamentoController  from '../controller/Agendamento.controller.js';

const AgendamentoRouter = Router();
//READ das rotas 
/**
 * @swagger
 * /Receptor:
 *   get:
 *     summary: Lista todos os receptores cadastrados
 *     tags:
 *      - Receptores
 *     responses:
 *       200:
 *         description: Lista todos os receptores cadastrados
 */
AgendamentoRouter.get("/", AgendamentoController.getAgendamentoController);

//CREATE das rotas
/**
 * @swagger
 * /Receptor/cadastro:
 *   post:
 *     summary: Cadastra um novo receptor
 *     tags:
 *       - Receptores
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: Instituto Solidário
 *               tipo:
 *                 type: string
 *                 example: ONG
 *               endereco:
 *                 type: string
 *                 example: Rua das Flores, 123
 *               contato:
 *                 type: string
 *                 example: (71) 99999-9999
 *               capacidade_recebimento:
 *                 type: integer
 *                 example: 500
 *               alimentos_recebidos:
 *                 type: integer
 *                 example: 250
 *     responses:
 *       200:
 *         description: Cadastra um novo receptor
 *       400:
 *         description: Dados inválidos fornecidos
 */

AgendamentoRouter.post("/cadastro", AgendamentoController.createAgendamentoController)

//UPDATE das rotas
/**
 * @swagger
 * /Receptor/atualizar/{id}:
 *   put:
 *     summary: Atualiza os dados de um receptor pelo ID
 *     tags:
 *       - Receptores
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do receptor a ser atualizado
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: Instituto Esperança
 *               tipo:
 *                 type: string
 *                 example: ONG
 *               endereco:
 *                 type: string
 *                 example: Rua do Sol, 456
 *               contato:
 *                 type: string
 *                 example: (71) 98888-8888
 *               capacidade_recebimento:
 *                 type: integer
 *                 example: 300
 *               alimentos_recebidos:
 *                 type: integer
 *                 example: 120
 *     responses:
 *       200:
 *         description: Dados atualizados com sucesso
 *       404:
 *         description: Receptor não encontrado
 */

AgendamentoRouter.put("/atualizar/:id", AgendamentoController.uptadeAgendamentoController);

//DELETE das rotas
/**
 * @swagger
 * /Receptor/deletar/{id}:
 *   delete:
 *     summary: Remove um receptor pelo ID
 *     tags:
 *      - Receptores
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do receptor a ser removido
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Receptor removido com sucesso
 *       404:
 *         description: Receptor não encontrado
 */  
AgendamentoRouter.delete("/deletar/:id", AgendamentoController.deleteAgendamentoController);

export default AgendamentoRouter;