/*
  Warnings:

  - You are about to drop the column `project_phase` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the `revenue` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `project_phase_id` to the `projects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `activities` MODIFY `start_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `customers` MODIFY `first_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `employees` MODIFY `start_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `expenses` MODIFY `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `projects` DROP COLUMN `project_phase`,
    ADD COLUMN `project_phase_id` INTEGER NOT NULL,
    MODIFY `start_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- DropTable
DROP TABLE `revenue`;

-- CreateTable
CREATE TABLE `ProjectPhase` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ProjectPhase_type_key`(`type`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `revenues` (
    `id` INTEGER NOT NULL,
    `projectId` INTEGER NOT NULL,
    `companyId` INTEGER NOT NULL,
    `customer_email` VARCHAR(191) NOT NULL,
    `payment_date` DATETIME(3) NOT NULL,
    `payment` INTEGER NOT NULL,

    UNIQUE INDEX `revenues_projectId_key`(`projectId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `projects` ADD CONSTRAINT `projects_project_phase_id_fkey` FOREIGN KEY (`project_phase_id`) REFERENCES `ProjectPhase`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `revenues` ADD CONSTRAINT `revenues_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `projects`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `revenues` ADD CONSTRAINT `revenues_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `companies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `revenues` ADD CONSTRAINT `revenues_customer_email_fkey` FOREIGN KEY (`customer_email`) REFERENCES `customers`(`customer_email`) ON DELETE RESTRICT ON UPDATE CASCADE;
