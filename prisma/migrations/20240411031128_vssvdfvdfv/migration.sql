/*
  Warnings:

  - You are about to drop the column `auteurId` on the `avis` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `avis` DROP FOREIGN KEY `avis_auteurId_fkey`;

-- AlterTable
ALTER TABLE `avis` DROP COLUMN `auteurId`,
    ADD COLUMN `matiere` VARCHAR(191) NOT NULL DEFAULT '';
