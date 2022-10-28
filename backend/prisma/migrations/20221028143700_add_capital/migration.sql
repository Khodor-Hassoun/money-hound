/*
  Warnings:

  - Added the required column `capital` to the `companies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `companies` ADD COLUMN `capital` INTEGER NOT NULL;
