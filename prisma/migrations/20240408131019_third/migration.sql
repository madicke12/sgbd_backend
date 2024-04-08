/*
  Warnings:

  - Added the required column `auteurId` to the `rapport` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `rapport` ADD COLUMN `auteurId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `empoiDuTemps` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `cour` VARCHAR(191) NOT NULL,
    `contenu` VARCHAR(191) NOT NULL,
    `auteurId` INTEGER NOT NULL,
    `classID` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `empoiDuTemps` ADD CONSTRAINT `empoiDuTemps_classID_fkey` FOREIGN KEY (`classID`) REFERENCES `classRoom`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `empoiDuTemps` ADD CONSTRAINT `empoiDuTemps_auteurId_fkey` FOREIGN KEY (`auteurId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rapport` ADD CONSTRAINT `rapport_auteurId_fkey` FOREIGN KEY (`auteurId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
