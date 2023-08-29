/*
  Warnings:

  - Added the required column `status` to the `TipoSolicitacao` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TipoSolicitacao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "status" TEXT NOT NULL
);
INSERT INTO "new_TipoSolicitacao" ("id", "nome") SELECT "id", "nome" FROM "TipoSolicitacao";
DROP TABLE "TipoSolicitacao";
ALTER TABLE "new_TipoSolicitacao" RENAME TO "TipoSolicitacao";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
