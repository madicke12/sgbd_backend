-- CreateTable
CREATE TABLE `pv` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATETIME(3) NOT NULL,
    `lieu` VARCHAR(191) NOT NULL,
    `objet` VARCHAR(191) NOT NULL,
    `decision` VARCHAR(191) NOT NULL,
    `redacteurId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `pv` ADD CONSTRAINT `pv_redacteurId_fkey` FOREIGN KEY (`redacteurId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
