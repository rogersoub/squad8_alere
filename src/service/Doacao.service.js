import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// READ
export async function getDoacao() {
    const rows = await prisma.doacao.findMany();
    return rows;
}

// CREATE
export async function createDoacao(db){
    const creayed = await prisma.alimento.create({
        data: {
            alimento: db.alimento,
            quantidade: db.quantidade,
            doador_nome: db.doador_nome,
            data_doacao: db.data_doacao,
            localizacao: db.localizacao,
            validado: db.validado,          
        },
    });

    return created;
}

// DELETE
export async function deleteDoacao(id){
    const consists = await prisma.doacao.delete.findUnique({where: {id} });
    if(!consists) return null;

    const del = await prisma.doacao.delete({where: {id} });
    return del;
}

// UPDATE
 export async function updateDoacao(id, db){
    const update = await prisma.doacao.update({
        where: {id},
        data: {
            alimento: db.alimento,
            quantidade: db.quantidade,
            doador_nome: db.doador_nome,
            data_doacao: db.data_doacao,
            localizacao: db.localizacao,
            validado: db.validado,
        },
    });
    return update;
 }
