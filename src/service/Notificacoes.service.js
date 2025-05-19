import { PrismaClient } from "@prisma/client";

const prisma =  new PrismaClient();

//READ
export async function getNotificacoes(){
    const rows = await prisma.Notificacoes.findMany();
    return rows;
}

//CREATE
export async function createNotificacoes(db){
    const created = await prisma.Notificacoes.create({
        data: {
            categoria: db.categoria,
            mensagem: db.mensagem,
            destinatario: db.destinatario,
            lida: db.lida,
            criado_em: db.criado_em,
        },
    });
    return created;
}

export async function deleteNotificacoes(id){
    const consists = await prisma.Notificacoes.findUnique({where: {id} });
    if(!consists) return null;

    const del = await prisma.Notificacoes.delete({where: {id} });

    return del;
}

export async function updateNotificacoes(id, db){
    const update = await prisma.Notificacoes.update({
        where:{id},
        data:{
            categoria: db.categoria,
            mensagem: db.mensagem,
            destinatario: db.destinatario,
            lida: db.lida,
        },
    });
    return update;
}
