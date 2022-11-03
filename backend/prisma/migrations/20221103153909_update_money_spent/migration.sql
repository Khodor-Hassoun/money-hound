/*
  Warnings:

  - Made the column `money_spent` on table `projects` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `projects` MODIFY `money_spent` INTEGER NOT NULL DEFAULT 0;
