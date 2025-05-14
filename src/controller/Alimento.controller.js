//seervicos
import{
    getAlimento,
    createAlimento,
    deleteAlimento,
    updateAlimento,
} from "../service/Alimento.service.js";
//depois colocar logs

//import { categoriaENUM } from "@prisma/client";

class AlimentoController{

    //controller do read
    async getAlimentoController(req,res){
        const alimentoController = await getAlimento();

        res.status(200).json({message:"Todos os alimentos: ", alimentoController});
    }

    //controller do create
    async createAlimentoController(req, res){
        //corpo da requisicao
        const{
            nome,          
            descricao,
            peso,
            validade,
            categoria,
            estado,
            imagem_url,
        } = req.body 

        //validando se tem
        if(
            !nome ||           
            !descricao ||
            !peso ||
            !validade ||
            !categoria ||
            !estado ||
            !imagem_url
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

        const alimentoCre = await createAlimento({
            nome,          
            descricao,
            peso,
            validade,
            categoriaEncontrada,
            estado,
            imagem_url,
        });

        res.status(201).json({
            message:"Alimento criado!", alimentoCre
        });

    } 

    //DELETE
    async deleteAlimentoController(req,res){
        //parametro da requisicao
        const {id} = req.params; 

        const alimentoDel =  await deleteAlimento(id);

        if(!alimentoDel) return res.status(404).json({
            message:"Alimento não enconstrado"
        });

        res.status(200).json({
            message:"Alimento deletado!",
            alimentoDeletado: alimentoDel
        });

    }


    //UPDATE (delete+create)
     async updateAlimentoControlller(){
        //parametro da requisicao
        const {id} = req.params; 
        //corpo da requisicao
        const{
            nome,          
            descricao,
            peso,
            validade,
            categoria,
            estado,
            imagem_url,
        } = req.body 

        //validando se tem
        if(
            !nome ||           
            !descricao ||
            !peso ||
            !validade ||
            !categoria ||
            !estado ||
            !imagem_url
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

        const alimentoUp = await updateAlimento(id,{
            nome,          
            descricao,
            peso,
            validade,
            categoriaEncontrada,
            estado,
            imagem_url,
        });
        if(!alimentoUp)return res.status(404).json({
            message:"Alimento não enconstrado"
            });
        
        res.status(200).json({
            message:"Alimento Atualizado!", Alimento:alimentoUp
        });

     }





}

export default new AlimentoController();