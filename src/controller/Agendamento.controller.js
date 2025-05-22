    import{
        getAgendamento, uptadeAgendamento, createAgendamento, deleteAgendamento
    } from "../service/Agendamento.service.js";

    //depois colocar logs 

    //import {  tipoENUM } from "@prisma/client";

    class AgendamentoController{

        //controller do read
        async getAgendamentoController(req,res){
            const AgendamentoController = await getAgendamento();

            res.status (200).json({message: "Todos os agendamentos: ", AgendamentoController});

        }

        //controller do create 
        async createAgendamentoController(req,res){
            //corpo da requisicao
                const{
                    data_hora,                
                    status,                   
                    observacoes,
                    alimento_nome,
                    distribuidor_nome,
                    receptor_nome,
                } = req.body 

                //validando se tem
                if(
                    !data_hora ||               
                    !status ||                 
                    !observacoes||
                    !alimento_nome ||
                    !distribuidor_nome ||
                    !receptor_nome
                ){

                res.status(400).json({message: "Adicione todos dados corretamente"});
                }

            try{
                const Agendamento = await createAgendamento({
                    data_hora,                
                    status,                   
                    observacoes,
                    alimento_nome,
                    distribuidor_nome,
                    receptor_nome,
                });

                res.status(201).json({
                    message: "Agendamento criado com sucesso",
                    Agendamento,
                });
            }catch(error){
                res.status(500).json({ message:"Erro ao cadastrar um agendamento", error:error.message });
            }


        }
        //DELETE
        async deleteAgendamentoController(req,res){
            //parametro da requisicao
            const { id } = req.params;

            const receptor = await deleteAgendamento(id);

            if(!receptor){
                return res.status(404).json({message: "Agendamento não encontrado"});
            }

            res.status(200).json({message: "Agendamento deletado com sucesso"
                
            });

        }


        //UPDATE
        async uptadeAgendamentoController(){
            //parametro da requsicao
            const { id } = req.params;
            //corpo da requisicao
            const {
                data_hora,                
                    status,                   
                    observacoes,
                    alimento_nome,
                    distribuidor_nome,
                    receptor_nome,
            } = req.body;

            //validando se tem
            if(
                !data_hora ||               
                !status ||                 
                !observacoes ||
                !alimento_nome ||
                !distribuidor_nome ||
                !receptor_nome
            ){
                res.status(400).json({message: "Adicione todos dados corretamente"});
            }

            try{
                const Agendamento = await uptadeAgendamento(id,{
                    data_hora,                
                    status,                   
                    observacoes,
                    alimento_nome,
                    distribuidor_nome,
                    receptor_nome,
                });
                if(!Agendamento){
                    return res.status(404).json({message: "Agendamento não encontrado"});
                }

                res.status(200).json({
                    message: "Agendamento atualizado com sucesso",
                    receptor,
                });
            }catch(error){
                res.status(500).json({ message:"Erro ao atualizar Agendamento", error:error.message });
            }


        }
    }
    export default new AgendamentoController();