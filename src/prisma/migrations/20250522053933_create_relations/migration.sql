-- CreateTable
CREATE TABLE "alimentoDistribuidor" (
    "alimentoId" TEXT NOT NULL,
    "distribuidorId" TEXT NOT NULL,
    "criado_em" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" DATETIME NOT NULL,

    PRIMARY KEY ("alimentoId", "distribuidorId"),
    CONSTRAINT "alimentoDistribuidor_alimentoId_fkey" FOREIGN KEY ("alimentoId") REFERENCES "alimento" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "alimentoDistribuidor_distribuidorId_fkey" FOREIGN KEY ("distribuidorId") REFERENCES "distribuidor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

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
    "atualizado_em" DATETIME NOT NULL,
    "alimentoId" TEXT NOT NULL
);
INSERT INTO "new_distribuidor" ("alimentoId", "atualizado_em", "contato", "criado_em", "documento", "id", "nome", "regiao_atuacao") SELECT "alimentoId", "atualizado_em", "contato", "criado_em", "documento", "id", "nome", "regiao_atuacao" FROM "distribuidor";
DROP TABLE "distribuidor";
ALTER TABLE "new_distribuidor" RENAME TO "distribuidor";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
