-- CreateTable
CREATE TABLE "Notificaoes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "categoria" TEXT NOT NULL,
    "mensagem" TEXT NOT NULL,
    "destinatario" TEXT NOT NULL,
    "lida" BOOLEAN NOT NULL,
    "criado_em" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
