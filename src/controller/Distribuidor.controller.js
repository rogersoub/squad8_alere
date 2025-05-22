// serviços
import {
    getDistribuidor,
    createDistribuidor,
    deleteDistribuidor,
    updateDistribuidor,
} from "../service/Distribuidor.service.js";

class DistribuidorController {

    // Controller do read
    static async getDistribuidorController(req, res) {
        const distribuidor = await getDistribuidor();
        res.status(200).json({ message: "Todos os distribuidores: ", distribuidor });
    }

    // Controller do create
    static async createDistribuidorController(req, res) {
        const { nome, contato, documento, alimentos, regiao_atuacao } = req.body;

        if (!nome || !contato || !documento || !alimentos || !regiao_atuacao) {
            return res.status(400).json({ message: "Adicione todos dados corretamente" });
        }

        try {
            const distribuidorCre = await createDistribuidor({
                nome, contato, documento, alimentos, regiao_atuacao
            });

            res.status(201).json({
                message: "Distribuidor criado!", distribuidorCre
            });
        } catch (error) {
            res.status(500).json({ message: "Erro ao cadastrar distribuidor", error: error.message });
        }
    }

    // DELETE
    static async deleteDistribuidorController(req, res) {
        const { id } = req.params;

        const distribuidorDel = await deleteDistribuidor(id);

        if (!distribuidorDel) {
            return res.status(404).json({ message: "Distribuidor não encontrado" });
        }

        res.status(200).json({
            message: "Distribuidor deletado!",
            distribuidorDeletado: distribuidorDel
        });
    }

    // UPDATE
    static async updateDistribuidorController(req, res) {
        const { id } = req.params;
        const { nome, contato, documento, alimentos, regiao_atuacao } = req.body;

        if (!nome || !contato || !documento || !alimentos || !regiao_atuacao) {
            return res.status(400).json({ message: "Adicione todos dados corretamente" });
        }

        try {
            const distribuidorUp = await updateDistribuidor(id, {
                nome, contato, documento, alimentos, regiao_atuacao
            });

            if (!distribuidorUp) {
                return res.status(404).json({ message: "Distribuidor não encontrado" });
            }

            res.status(200).json({
                message: "Distribuidor atualizado!", distribuidorAtualizado: distribuidorUp
            });
        } catch (error) {
            res.status(500).json({ message: "Erro ao atualizar distribuidor", error: error.message });
        }
    }
}

export default DistribuidorController;
