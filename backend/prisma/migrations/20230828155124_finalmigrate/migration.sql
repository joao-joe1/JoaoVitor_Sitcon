/*
  Warnings:

  - You are about to drop the column `dataNascimento` on the `Paciente` table. All the data in the column will be lost.
  - Added the required column `dataNasc` to the `Paciente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Procedimento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoId` to the `Procedimento` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "ProfissionalAtende" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "procedimentoId" INTEGER NOT NULL,
    "profissionalId" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    CONSTRAINT "ProfissionalAtende_procedimentoId_fkey" FOREIGN KEY ("procedimentoId") REFERENCES "Procedimento" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ProfissionalAtende_profissionalId_fkey" FOREIGN KEY ("profissionalId") REFERENCES "Profissional" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Paciente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "dataNasc" DATETIME NOT NULL,
    "cpf" TEXT NOT NULL,
    "status" TEXT NOT NULL
);
INSERT INTO "new_Paciente" ("cpf", "id", "nome", "status") SELECT "cpf", "id", "nome", "status" FROM "Paciente";
DROP TABLE "Paciente";
ALTER TABLE "new_Paciente" RENAME TO "Paciente";
CREATE TABLE "new_Procedimento" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "tipoId" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "solicitacaoId" INTEGER,
    CONSTRAINT "Procedimento_tipoId_fkey" FOREIGN KEY ("tipoId") REFERENCES "TipoSolicitacao" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Procedimento_solicitacaoId_fkey" FOREIGN KEY ("solicitacaoId") REFERENCES "Solicitacao" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Procedimento" ("id", "nome", "solicitacaoId") SELECT "id", "nome", "solicitacaoId" FROM "Procedimento";
DROP TABLE "Procedimento";
ALTER TABLE "new_Procedimento" RENAME TO "Procedimento";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
