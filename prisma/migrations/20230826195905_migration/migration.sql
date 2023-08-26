/*
  Warnings:

  - Added the required column `status` to the `Paciente` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Paciente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "dataNascimento" DATETIME NOT NULL,
    "status" TEXT NOT NULL
);
INSERT INTO "new_Paciente" ("cpf", "dataNascimento", "id", "nome") SELECT "cpf", "dataNascimento", "id", "nome" FROM "Paciente";
DROP TABLE "Paciente";
ALTER TABLE "new_Paciente" RENAME TO "Paciente";
CREATE UNIQUE INDEX "Paciente_cpf_key" ON "Paciente"("cpf");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
