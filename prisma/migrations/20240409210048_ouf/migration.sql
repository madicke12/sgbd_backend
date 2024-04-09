/*
  Warnings:

  - You are about to drop the column `date` on the `rapport` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `rapport` DROP COLUMN `date`,
    MODIFY `updatedAt` DATETIME(3) NULL;

-- CreateTable
CREATE TABLE `avis` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `contenu` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `auteurId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `avis` ADD CONSTRAINT `avis_auteurId_fkey` FOREIGN KEY (`auteurId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
