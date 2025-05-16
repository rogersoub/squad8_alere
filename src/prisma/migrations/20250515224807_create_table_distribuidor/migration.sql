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

-- CreateTable
<<<<<<<< HEAD:src/prisma/migrations/20250515235809_create_table_receptor/migration.sql
CREATE TABLE "receptor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "contato" TEXT NOT NULL,
    "capacidade_recebimento" INTEGER NOT NULL,
    "alimentos_recebidos" INTEGER NOT NULL,
========
CREATE TABLE "distribuidor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "contato" TEXT NOT NULL,
    "documento" TEXT NOT NULL,
    "alimentos" TEXT NOT NULL,
    "regiao_atuacao" TEXT NOT NULL,
>>>>>>>> Jaiane:src/prisma/migrations/20250515224807_create_table_distribuidor/migration.sql
    "criado_em" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Atualizado_em" DATETIME NOT NULL
);
