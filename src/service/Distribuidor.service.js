import { PrismaClient } from "@prisma/client";

const prisma =  new PrismaClient();

//READ
export async function getDistribuidor(){
    const rows = await prisma.distribuidor.findMany({
        include: {alimentos:true}//qualquer coisa, apagar antes da chave azul
    });
    return rows;
}

//CREATE
export async function createDistribuidor(db){
    const created = await prisma.distribuidor.create({
        data: {
            nome: db.nome,                       
            contato: db.contato,
            documento: db.documento,
            regiao_atuacao: db.regiao_atuacao,
            alimentoId: db.alimentoId,
        },
    });
    return created;
}

export async function deleteDistribuidor(id){
    const consists = await prisma.distribuidor.findUnique({where: {id} });
    if(!consists) return null;

    const del = await prisma.distribuidor.delete({where: {id} });

    return del;
}


//UPDATE
//nao recebe o criado em
export async function updateDistribuidor(id, db){
    const update = await prisma.distribuidor.update({
        where:{id},
        data:{
            nome: db.nome,                       
            contato: db.contato,
            documento: db.documento,
            alimentos: db.alimentos,
            regiao_atuacao: db.regiao_atuacao,
            alimentoId: db.alimentoId,  
        },
    });
    return update;
}
