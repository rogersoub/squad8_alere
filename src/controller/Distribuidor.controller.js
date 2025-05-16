//seervicos
import{
    getDistribuidor,
    createDistribuidor,
    deleteDistribuidor,
    updateDistribuidor,
} from "../service/Distribuidor.service.js";
//depois colocar logs

//import { categoriaENUM } from "@prisma/client";

class DistribuidorController{

    //controller do read
    async getdistribuidorController(req,res){
        const distribuidorController = await getdistribuidor();

        res.status(200).json({message:"Todos os distribuidores: ", distribuidorController});
    }

    //controller do create
    async createdistribuidorController(req, res){
        //corpo da requisicao
        const{
            nome,          
            contato,
            documento,
            alimentos,
            regiao_atuacao,
            criado_em,
            atualizado_em,
        } = req.body 

        //validando se tem
        if(
            !nome ||           
            !contato ||
            !documento ||
            !alimentos ||
            !regiao_atuacao ||
            !criado_em ||
            !atualizado_em ||
            !req.body
        ){
            res.status(400).json({message:"Adicione todos dados corretamente",});
        }
        //nao entendi
        const categoriaEncontrada = Object.keys(categoriaENUM).find(
            (key) => categoriaENUM[key] === categoria
        );

        //se não existe
        if(typeof categoriaEncontrada === "Undefined"){
            return res.status(400).json({
                message:"Não existe essa categoria",
            });
        }

        const distribuidorCre = await createdistribuidor({
            nome,           
            contato,
            documento,
            alimentos,
            regiao_atuacao,
            criado_em,
            atualizado_em, 
        });

        res.status(201).json({
            message:"distribuidor criado!", distribuidorCre
        });

    } 

    //DELETE
    async deletedistribuidorController(req,res){
        //parametro da requisicao
        const {id} = req.params; 

        const distribuidorDel =  await deletedistribuidor(id);

        if(!distribuidorDel) return res.status(404).json({
            message:"distribuidor não enconstrado"
        });

        res.status(200).json({
            message:"distribuidor deletado!",
            distribuidoroDeletado: distribuidorDel
        });

    }


    //UPDATE (delete+create)
     async updateDistribuidorControlller(){
        //parametro da requisicao
        const {id} = req.params; 
        //corpo da requisicao
        const{
            nome,           
            contato,
            documento,
            alimentos,
            regiao_atuacao,
            criado_em,
            atualizado_em,
        } = req.body 

        //validando se tem
        if(
            !nome ||           
            !contato ||
            !documento ||
            !alimentos ||
            !regiao_atuacao ||
            !criado_em ||
            !atualizado_em ||
            !req.body
        ){
            res.status(400).json({message:"Adicione todos dados corretamente",});
        }

        //nao entendi
        const categoriaEncontrada = Object.keys(categoriaENUM).find(
            (key) => categoriaENUM[key] === categoria
        );

        //se não existe
        if(typeof categoriaEncontrada === "Undefined"){
            return res.status(400).json({
                message:"Não existe essa categoria",
            });
        }

        const distribuidorUp = await updateDistribuidor(id,{
            nome,           
            contato,
            documento,
            alimentos,
            regiao_atuacao,
            criado_em,
            atualizado_em,
        });
        if(!distribuidorUp)return res.status(404).json({
            message:"distribuidor não enconstrado"
            });
        
        res.status(200).json({
            message:"distribuidor Atualizado!",  updatedistribuidor:distribuidorUp
        });

     }





}

export default new distribuidorController();