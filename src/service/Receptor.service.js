import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//READ 
export async function getReceptor() {
    const rows = await prisma.receptor .findMany();
    return rows;
}

//CREATE
export async function createReceptor(db) {
    const created = await prisma.receptor.create({
        data: {
            nome: db.nome,
            tipo: db.email,
            contato: db.telefone,
            endereco: db.endereco,
            capacidade_recebimente: db.capacidade,
            alimentos_recebidos: db.alimentos,
        }
    });
    return created;

}

export async function deleteReceptor(id) { 
    const consists = await prisma.receptor. findUnique({id} );
    if (!consists) return null;

    const del = await prisma.receptor.delete ({
        where: {
            id: id
        }
    }); 

    return del;
}

//UPDATE
export async function uptadeReceptor(id, db){
    const uptade = await prisma.alimento.uptade ({
        where: { id },
        data: {
            nome: db.nome,
            tipo: db.email,
            contato: db.telefone,
            endereco: db.endereco,
            capacidade_recebimente: db.capacidade,
            alimentos_recebidos: db.alimentos,
        },
    });
    return uptade;
}
