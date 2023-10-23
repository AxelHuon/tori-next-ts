/*
  Warnings:

  - You are about to drop the column `type` on the `Genre` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Licensor` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Producer` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Studio` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Genre` DROP COLUMN `type`;

-- AlterTable
ALTER TABLE `Licensor` DROP COLUMN `type`;

-- AlterTable
ALTER TABLE `Producer` DROP COLUMN `type`;

-- AlterTable
ALTER TABLE `Studio` DROP COLUMN `type`;
