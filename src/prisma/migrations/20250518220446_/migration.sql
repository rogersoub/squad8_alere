-- CreateTable
CREATE TABLE "estatistica" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "mais_desperdicados" TEXT NOT NULL,
    "total_alimentos" INTEGER NOT NULL,
    "total_doacoes" INTEGER NOT NULL,
    "total_recebidos" INTEGER NOT NULL,
    "ranking_categoria" JSONB NOT NULL,
    "criado_em" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" DATETIME NOT NULL
);
