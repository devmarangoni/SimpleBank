-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "saldo" DECIMAL NOT NULL DEFAULT 0
);
INSERT INTO "new_User" ("createdAt", "email", "id", "name", "telefone") SELECT "createdAt", "email", "id", "name", "telefone" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_telefone_key" ON "User"("telefone");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
