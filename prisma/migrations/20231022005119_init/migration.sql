/*
  Warnings:

  - You are about to drop the column `aired_from` on the `Anime` table. All the data in the column will be lost.
  - You are about to drop the column `aired_to` on the `Anime` table. All the data in the column will be lost.
  - Added the required column `airedFrom` to the `Anime` table without a default value. This is not possible if the table is not empty.
  - Added the required column `airedTo` to the `Anime` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Anime` DROP COLUMN `aired_from`,
    DROP COLUMN `aired_to`,
    ADD COLUMN `airedFrom` DATETIME(3) NOT NULL,
    ADD COLUMN `airedTo` DATETIME(3) NOT NULL;
