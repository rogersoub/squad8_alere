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
<<<<<<<< HEAD:src/prisma/migrations/20250516184255_create_4_tables/migration.sql
CREATE TABLE "distribuidor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "contato" TEXT NOT NULL,
    "documento" TEXT NOT NULL,
    "alimentos" TEXT NOT NULL,
    "regiao_atuacao" TEXT NOT NULL,
    "criado_em" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Atualizado_em" DATETIME NOT NULL
);

-- CreateTable
========
>>>>>>>> 8a32b6de8d196292440761a353f00572860a061e:src/prisma/migrations/20250520012608_crete_table_notificacoes/migration.sql
CREATE TABLE "doacao" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "alimento" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "doador_nome" TEXT NOT NULL,
    "data_doacao" DATETIME NOT NULL,
    "localizacao" TEXT NOT NULL,
    "validado" BOOLEAN NOT NULL DEFAULT false,
    "criado_em" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "receptor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "contato" TEXT NOT NULL,
    "capacidade_recebimento" INTEGER NOT NULL,
    "alimentos_recebidos" INTEGER NOT NULL,
<<<<<<<< HEAD:src/prisma/migrations/20250516184255_create_4_tables/migration.sql
========
    "criado_em" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Atualizado_em" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "distribuidor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "contato" TEXT NOT NULL,
    "documento" TEXT NOT NULL,
    "alimentos" TEXT NOT NULL,
    "regiao_atuacao" TEXT NOT NULL,
>>>>>>>> 8a32b6de8d196292440761a353f00572860a061e:src/prisma/migrations/20250520012608_crete_table_notificacoes/migration.sql
    "criado_em" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Atualizado_em" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "notificaoes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "categoria" TEXT NOT NULL,
    "mensagem" TEXT NOT NULL,
    "destinatario" TEXT NOT NULL,
    "lida" BOOLEAN NOT NULL,
    "criado_em" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
