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
    "regiao_atuacao" TEXT NOT NULL,
    "criado_em" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" DATETIME NOT NULL,
    "alimentoId" TEXT NOT NULL,
    CONSTRAINT "distribuidor_alimentoId_fkey" FOREIGN KEY ("alimentoId") REFERENCES "alimento" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

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
    "atualizado_em" DATETIME NOT NULL,
    "alimentoId" TEXT NOT NULL,
    CONSTRAINT "doacao_alimentoId_fkey" FOREIGN KEY ("alimentoId") REFERENCES "alimento" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
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
    "observacoes" INTEGER NOT NULL,
    "criado_em" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" DATETIME NOT NULL,
    "alimentoId" TEXT NOT NULL,
    "distribuidorId" TEXT NOT NULL,
    "receptorId" TEXT NOT NULL,
    CONSTRAINT "agendamento_alimentoId_fkey" FOREIGN KEY ("alimentoId") REFERENCES "alimento" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "agendamento_distribuidorId_fkey" FOREIGN KEY ("distribuidorId") REFERENCES "distribuidor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "agendamento_receptorId_fkey" FOREIGN KEY ("receptorId") REFERENCES "receptor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "notificacoes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "categoria" TEXT NOT NULL,
    "mensagem" TEXT NOT NULL,
    "destinatario" TEXT NOT NULL,
    "lida" BOOLEAN NOT NULL,
    "criado_em" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "agendamentoId" TEXT NOT NULL,
    CONSTRAINT "notificacoes_agendamentoId_fkey" FOREIGN KEY ("agendamentoId") REFERENCES "agendamento" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
