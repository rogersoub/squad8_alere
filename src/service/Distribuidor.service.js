import { PrismaClient } from "@prisma/client";

const prisma =  new PrismaClient();

//READ
export async function getdistribuidor(){
    const rows = await prisma.distribuidor.findMany();
    return rows;
}

//CREATE
export async function createdistribuidor(db){
    const created = await prisma.distribuidor.create({
        data: {
            nome: db.nome,                       
            contato: db.contato,
            documento: db.documento,
            alimentos: db.alimentos,
            regiao_atuacao: db.regiao_atuacao,
            criado_em:db.criado_em,
            atualizado_em: db.atualizado_em,
        },
    });
    return created;
}

export async function distribuidor(id){
    const consists = await prisma.distribuidor.findUnique({where: {id} });
    if(!consists) return null;

    const del = await prisma.distribuidor.delete({where: {id} });

    return del;
}


//UPDATE
//nao recebe o criado em
export async function updatedistribuidor(id, db){
    const update = await prisma.distribuidor.update({
        where:{id},
        data:{
            nome: db.nome,                       
            contato: db.contato,
            documento: db.documento,
            alimentos: db.alimentos,
            regiao_atuacao: db.regiao_atuacao,  
        },
    });
    return update;
}
