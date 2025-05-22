import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//READ 
export async function getAgendamento() {
    const rows = await prisma.agendamento.findMany();
    return rows;
}

//CREATE
export async function createAgendamento(db) {
    const created = await prisma.agendamento.create({
        data: {
            data_hora : db.data_hora,                
            status : db.status,                   
            observacoes : db.observacoes,
        }
    });
    return created;

}

export async function deleteAgendamento(id) { 
    const consists = await prisma.agendamento.findUnique({id} );
    if (!consists) return null;

    const del = await prisma.agendamento.delete ({
        where: {
            id: id
        }
    }); 

    return del;
}

//UPDATE
export async function uptadeAgendamento(id, db){
    const uptade = await prisma.agendamento.uptade ({
        where: { id },
        data: {
            data_hora : db.data_hora,                
            status : db.status,                   
            observacoes : db.observacoes,
        },
    });
    return uptade;
}
