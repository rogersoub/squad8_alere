-- CreateTable
CREATE TABLE "alimento" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "peso" INTEGER NOT NULL,
    "validade" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "estado" INTEGER NOT NULL,
    "imagem_url" TEXT NOT NULL,
    "criado_em" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Atualizado_em" DATETIME NOT NULL
);
