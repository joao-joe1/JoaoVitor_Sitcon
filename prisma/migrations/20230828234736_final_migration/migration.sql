/*
  Warnings:

  - Added the required column `status` to the `Profissional` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Profissional" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "status" TEXT NOT NULL
);
INSERT INTO "new_Profissional" ("id", "nome") SELECT "id", "nome" FROM "Profissional";
DROP TABLE "Profissional";
ALTER TABLE "new_Profissional" RENAME TO "Profissional";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
