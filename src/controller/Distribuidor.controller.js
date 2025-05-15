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
    async getDistribuidorController(req,res){
        const DistribuidorController = await getDistribuidor();

        res.status(200).json({message:"Todos os Distribuidores: ", DistribuidorController});
    }

    //controller do create
    async createDistribuidorController(req, res){
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

        const DistribuidorCre = await createDistribuidor({
            nome,           
            contato,
            documento,
            alimentos,
            regiao_atuacao,
            criado_em,
            atualizado_em, 
        });

        res.status(201).json({
            message:"Distribuidor criado!", DistribuidorCre
        });

    } 

    //DELETE
    async deleteDistribuidorController(req,res){
        //parametro da requisicao
        const {id} = req.params; 

        const DistribuidorDel =  await deleteDistribuidor(id);

        if(!DistribuidorDel) return res.status(404).json({
            message:"Distribuidor não enconstrado"
        });

        res.status(200).json({
            message:"Distribuidor deletado!",
            DistribuidoroDeletado: DistribuidorDel
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

        const DistribuidorUp = await updateDistribuidor(id,{
            nome,           
            contato,
            documento,
            alimentos,
            regiao_atuacao,
            criado_em,
            atualizado_em,
        });
        if(!DistribuidorUp)return res.status(404).json({
            message:"Distribuidor não enconstrado"
            });
        
        res.status(200).json({
            message:"Distribuidor Atualizado!",  updateDistribuidor:DistribuidorUp
        });

     }





}

export default new DistribuidorController();