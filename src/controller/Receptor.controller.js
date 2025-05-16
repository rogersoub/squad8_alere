    import{
        getReceptor,
        createReceptor,
        deleteReceptor,
        uptadeReceptor,
    } from "../service/Receptor.service.js";

    //depois colocar logs 

    //import {  tipoENUM } from "@prisma/client";

    class ReceptorController{

        //controller do read
        async getReceptorController(req,res){
            const receptorController = await getReceptor();

            res.status (200).json({message: "Todos os receptores: ", receptorController});

        }

        //controller do create 
        async createReceptorController(req,res){
            //corpo da requisicao
                const{
                    nome,
                    tipo,
                    endereco,
                    contato,
                    capacidade_recebimento,
                    alimentos_recebidos,
                } = req.body 

                //validando se tem
                if(
                    !nome ||
                    !endereco ||
                    !contato ||
                    !capacidade_recebimento ||
                    !alimentos_recebidos 
                ){

                res.status(400).json({message: "Adicione todos dados corretamente"});
                }

                const tipoEncontrado = Object.keys(tipoENUM).find(
                    (key) => tipoENUM [key] === tipo
                );

                //se nao existe
                if(typeof tipoEncontrado === "undefined"){
                    res.status(400).json({
                        message: "Tipo de receptor não existe"
                    });
                }

                const receptor = await createReceptor({
                    nome,
                    tipo,
                    endereco,
                    contato,
                    capacidade_recebimento,
                    alimentos_recebidos,
                });

                res.status(201).json({
                    message: "Receptor criado com sucesso",
                    receptor,
                });
        }
        //DELETE
        async deleteReceptorController(req,res){
            //parametro da requisicao
            const { id } = req.params;

            const receptor = await deleteReceptor(id);

            if(!receptor){
                return res.status(404).json({message: "Receptor não encontrado"});
            }

            res.status(200).json({message: "Receptor deletado com sucesso"
                
            });

        }


        //UPDATE
        async uptadeReceptorController(){
            //parametro da requsicao
            const { id } = req.params;
            //corpo da requisicao
            const {
                nome,
                tipo,
                endereco,
                contato,
                capacidade_recebimento,
                alimentos_recebidos,
            } = req.body;

            //validando se tem
            if(
                !nome ||
                !endereco ||
                !contato ||
                !capacidade_recebimento ||
                !alimentos_recebidos 
            ){
                res.status(400).json({message: "Adicione todos dados corretamente"});
            }

            const tipoEncontrado = Object.keys(tipoENUM).find(
                (key) => tipoENUM [key] === tipo
            );

            //se nao existe
            if(typeof tipoEncontrado === "undefined"){
                res.status(400).json({
                    message: "Tipo de receptor não existe"
                });
            }

            const receptor = await uptadeReceptor(id,{
                nome,
                tipo,
                endereco,
                contato,
                capacidade_recebimento,
                alimentos_recebidos,
            });
            if(!receptor){
                return res.status(404).json({message: "Receptor não encontrado"});
            }

            res.status(200).json({
                message: "Receptor atualizado com sucesso",
                receptor,
            });
        }
    }
    export default new ReceptorController();