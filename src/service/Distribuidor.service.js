import { PrismaClient } from "@prisma/client";

const prisma =  new PrismaClient();

//READ
export async function getDistribuidor(){
    const rows = await prisma.Distribuidor.findMany();
    return rows;
}

//CREATE
export async function createDistribuidor(db){
    const created = await prisma.Distribuidor.create({
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

export async function Distribuidor(id){
    const consists = await prisma.Distribuidor.findUnique({where: {id} });
    if(!consists) return null;

    const del = await prisma.Distribuidor.delete({where: {id} });

    return del;
}


//UPDATE
//nao recebe o criado em
export async function updateDistribuidor(id, db){
    const update = await prisma.Distribuidor.update({
        where:{id},
        data:{
            nome: db.nome,                       
            contato: db.contato,
            documento: db.documento,
            alimentos: db.alimentos,
            regiao_atuacao: db.regiao_atuacao,
            criado_em:db.criado_em,
            atualizado_em: db.atualizado_em,   
        },
    });
    return update;
}
