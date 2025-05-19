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
            criado_em,
        } = req.body
        
        //validando se tem
        if(
            !categoria || 
            !mensagem || 
            !destinatario || 
            !lida || 
            !criado_em
        ) {
            return res.status(400).json({message:"Preencha todos os campos obrigatórios!"});
        } 

        const NotificacoesCre = await createNotificacoes({
            categoria, 
            mensagem, 
            destinatario, 
            lida, 
            criado_em,
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
        } = req.body;

        if(
            !categoria || 
            !mensagem || 
            !destinatario || 
            !lida
        ) {
            return res.status(400).json({message:"Preencha todos os campos obrigatórios!"});
        }   

        const NotificacoesUp = await updateNotificacoes(id, {
            categoria, 
            mensagem, 
            destinatario, 
            lida,  
        });
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