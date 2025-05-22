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
    "atualizado_em" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "distribuidor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "contato" TEXT NOT NULL,
    "documento" TEXT NOT NULL,
    "alimentos" TEXT NOT NULL,
    "regiao_atuacao" TEXT NOT NULL,
    "criado_em" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "estatistica" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "mais_desperdicados" TEXT NOT NULL,
    "total_alimentos" INTEGER NOT NULL,
    "total_doacoes" INTEGER NOT NULL,
    "total_recebidos" INTEGER NOT NULL,
    "ranking_categoria" TEXT NOT NULL,
    "criado_em" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "doacao" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "alimento_nome" TEXT NOT NULL,
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
    "criado_em" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Atualizado_em" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "agendamento" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "data_hora" DATETIME NOT NULL,
    "status" TEXT NOT NULL,
    "observacoes" TEXT NOT NULL,
    "alimento_nome" TEXT NOT NULL,
    "distribuidor_nome" TEXT NOT NULL,
    "receptor_nome" TEXT NOT NULL,
    "criado_em" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "notificacoes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "categoria" TEXT NOT NULL,
    "mensagem" TEXT NOT NULL,
    "receptor" TEXT NOT NULL,
    "lida" BOOLEAN NOT NULL,
    "criado_em" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
