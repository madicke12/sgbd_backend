/*
  Warnings:

  - You are about to drop the `cahierTexteItem` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `auteurId` to the `cahierTexte` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cour` to the `cahierTexte` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cahierTexte` ADD COLUMN `auteurId` INTEGER NOT NULL,
    ADD COLUMN `cour` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `cahierTexteItem`;

-- CreateTable
CREATE TABLE `classRoom` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rapport` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATETIME(3) NOT NULL,
    `contenu` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `cahierTexte` ADD CONSTRAINT `cahierTexte_auteurId_fkey` FOREIGN KEY (`auteurId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
