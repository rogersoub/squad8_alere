import{
    getDoacao,
    createDoacao,
    deleteDoacao,
    updateDoacao,
} from "../service/Doacao.service.js";


class DoacaoController{

    // controller do READ
    async getDoacaoController(req, res) {
        const doacaoController = await getDoacao();

        res.status(200).json({message:"Doações encontradas com sucesso: ", doacaoController});
    }


    // controller do CREATE
    async createDoacaoController(req, res) {
        //corpo da requisição
        const { 
            alimento_nome, 
            quantidade, 
            doador_nome,
            data_doacao, 
            localizacao,
            validado,
            alimentoId,
        } = req.body
        
        //validando se tem
        if(
            !alimento_nome || 
            !quantidade ||
            !doador_nome || 
            !data_doacao || 
            !localizacao || 
            !validado ||
            !alimentoId 
        ) {
            return res.status(400).json({message:"Preencha todos os campos obrigatórios!"});
        }    

        const doacaoCre = await createDoacao({
            alimento_nome, 
            quantidade, 
            doador_nome,
            data_doacao, 
            localizacao,
            validado,
            alimentoId, 
    });

    res.status(201).json({message:"Doação criada com sucesso!", doacaoCre});

    }


    // UPDATE
    async updateDoacaoController(req, res) {
        const { id } = req.params;
        const { 
            alimento_nome, 
            quantidade, 
            doador_nome,
            data_doacao, 
            localizacao,
            validado, 
            alimentoId,
        } = req.body;

        if(
            !alimento_nome || 
            !quantidade ||
            !doador_nome || 
            !data_doacao || 
            !localizacao || 
            !validado ||
            !alimentoId
        ) {
            return res.status(400).json({message:"Preencha todos os campos obrigatórios!"});
        }    

        const doacaoUp = await updateDoacao(id, {
            alimento_nome, 
            quantidade, 
            doador_nome,
            data_doacao, 
            localizacao,
            validado,
            alimentoId, 
    });
}

   // controller do DELETE
    async deleteDoacaoController(req, res) {
        const { id } = req.params;

        const doacaoDel = await deleteDoacao(id);

        if(!doacaoDel) {
            return res.status(404).json({message:"Doação não encontrada!"});
        }

        res.status(200).json({message:"Doação deletada com sucesso!", doacaoDel});
    }

}
export default new DoacaoController();