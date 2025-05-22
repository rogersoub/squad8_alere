import {
  createRelacao,
  getRelacoes,
  deleteRelacao,
} from '../service/AlimentoDistribuidor.service.js';

export const createAlimentoDistribuidor = async (req, res) => {
  try {
    const { alimentoId, distribuidorId } = req.body;

    const novaRelacao = await createRelacao({ alimentoId, distribuidorId });
    res.status(201).json(novaRelacao);
  } catch (error) {
    res.status(400).json({
      error: 'Erro ao criar a relação.',
      detalhes: error.message,
    });
  }
};

//DISPONÍVEIS
export const getAllAlimentoDistribuidor = async (req, res) => {
  try {
    const relacoes = await getRelacoes();
    res.status(200).json(relacoes);
  } catch (error) {
    res.status(500).json({
      error: 'Erro ao buscar as relações.',
      detalhes: error.message,
    });
  }
};

export const deleteAlimentoDistribuidor = async (req, res) => {
  try {
    const { alimentoId, distribuidorId } = req.params;

    await deleteRelacao({ alimentoId, distribuidorId });
    res.status(200).json({ mensagem: 'Relação excluída com sucesso.' });
  } catch (error) {
    res.status(500).json({
      error: 'Erro ao excluir a relação.',
      detalhes: error.message,
    });
  }
};