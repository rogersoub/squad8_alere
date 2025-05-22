/*
  Warnings:

  - You are about to drop the column `alimentoId` on the `distribuidor` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_distribuidor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "contato" TEXT NOT NULL,
    "documento" TEXT NOT NULL,
    "regiao_atuacao" TEXT NOT NULL,
    "criado_em" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" DATETIME NOT NULL
);
INSERT INTO "new_distribuidor" ("atualizado_em", "contato", "criado_em", "documento", "id", "nome", "regiao_atuacao") SELECT "atualizado_em", "contato", "criado_em", "documento", "id", "nome", "regiao_atuacao" FROM "distribuidor";
DROP TABLE "distribuidor";
ALTER TABLE "new_distribuidor" RENAME TO "distribuidor";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
