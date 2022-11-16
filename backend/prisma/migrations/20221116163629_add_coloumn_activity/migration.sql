/*
  Warnings:

  - Added the required column `project_phase` to the `activities` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `activities` ADD COLUMN `project_phase` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `revenues` MODIFY `payment_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
