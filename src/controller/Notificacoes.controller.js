import{
    getNotificacoes,
    createNotificacoes,
    deleteNotificacoes,
    updateNotificacoes,
} from "../service/Notificacoes.service.js";


class NotificacoesController{

    // controller do READ
    async getNotificacoesController(req, res) {
        const notificacoesController = await getNotificacoes();

        res.status(200).json({message:"Notificações encontradas com sucesso: ", notificacoesController});
    }


    // controller do CREATE
    async createNotificacoesController(req, res) {
        //corpo da requisição
        const { 
            categoria, 
            mensagem, 
            destinatario, 
            lida, 
            agendamentoId,
        } = req.body
        
        //validando se tem
        if(
            !categoria || 
            !mensagem || 
            !destinatario || 
            !lida ||
            !agendamentoId 
        ) {
            return res.status(400).json({message:"Preencha todos os campos obrigatórios!"});
        } 

        const NotificacoesCre = await createNotificacoes({
            categoria, 
            mensagem, 
            destinatario, 
            lida,
            agendamentoId ,
        }); 

    res.status(201).json({message:"Notificação criada com sucesso!", NotificacoesCre});

    }


    // UPDATE
    async updateNotificacoesController(req, res) {
        const { id } = req.params;
        const { 
            categoria, 
            mensagem, 
            destinatario, 
            lida,  
            agendamentoId,
        } = req.body;

        if(
            !categoria || 
            !mensagem || 
            !destinatario || 
            !lida ||
            !agendamentoId 
        ) {
            return res.status(400).json({message:"Preencha todos os campos obrigatórios!"});
        }   
        try{
            const NotificacoesUp = await updateNotificacoes(id, {
                categoria, 
                mensagem, 
                destinatario, 
                lida,  
                agendamentoId,
            });

            if(!NotificacoesUp)return res.status(404).json({
                message:"Notificação não encontrado"
            });
        
            res.status(200).json({
                message:"Notificação Atualizada!", Notificação:NotificacoesUp
            });

        }catch(error){
            res.status(500).json({ message:"Erro ao atualizar Notificação", error:error.message });
        }

}

   // controller do DELETE
    async deleteNotificacoesController(req, res) {
        const { id } = req.params;

        const NotificacoesDel = await deleteNotificacoes(id);

        if(!doacaoDel) {
            return res.status(404).json({message:"Notificação não encontrada!"});
        }

        res.status(200).json({message:"Notificação deletada com sucesso!", NotificacoesDel});
    }

}
export default new NotificacoesController();