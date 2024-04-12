/*
  Warnings:

  - Added the required column `auteur` to the `pv` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pv` ADD COLUMN `auteur` VARCHAR(191) NOT NULL;
