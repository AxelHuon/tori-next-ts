/*
  Warnings:

  - Added the required column `mal_id` to the `Anime` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Anime` ADD COLUMN `mal_id` INTEGER NOT NULL;
