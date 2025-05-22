import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createRelacao = async ({ alimentoId, distribuidorId }) => {
  return await prisma.alimentoDistribuidor.create({
    data: {
      alimentoId,
      distribuidorId,
    },
  });
};

export const getRelacoes = async () => {
  return await prisma.alimentoDistribuidor.findMany({
    include: {
      alimento: true,
      distribuidor: true,
    },
  });
};

export const deleteRelacao = async ({ alimentoId, distribuidorId }) => {
  return await prisma.alimentoDistribuidor.delete({
    where: {
      alimentoId_distribuidorId: {
        alimentoId,
        distribuidorId,
      },
    },
  });
};

