/*
  Warnings:

  - Added the required column `contenu` to the `pv` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pv` ADD COLUMN `contenu` VARCHAR(191) NOT NULL;
