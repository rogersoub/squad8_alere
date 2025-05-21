/*
  Warnings:

  - You are about to drop the column `alimento` on the `doacao` table. All the data in the column will be lost.
  - Added the required column `alimento_nome` to the `doacao` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_doacao" (
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
INSERT INTO "new_doacao" ("atualizado_em", "criado_em", "data_doacao", "doador_nome", "id", "localizacao", "quantidade", "validado") SELECT "atualizado_em", "criado_em", "data_doacao", "doador_nome", "id", "localizacao", "quantidade", "validado" FROM "doacao";
DROP TABLE "doacao";
ALTER TABLE "new_doacao" RENAME TO "doacao";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
