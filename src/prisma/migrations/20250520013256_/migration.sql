/*
  Warnings:

  - You are about to drop the `notificaoes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "notificaoes";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "notificacoes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "categoria" TEXT NOT NULL,
    "mensagem" TEXT NOT NULL,
    "destinatario" TEXT NOT NULL,
    "lida" BOOLEAN NOT NULL,
    "criado_em" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
