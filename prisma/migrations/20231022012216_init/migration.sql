/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Genre` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Licensor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Producer` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Studio` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Genre_name_key` ON `Genre`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `Licensor_name_key` ON `Licensor`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `Producer_name_key` ON `Producer`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `Studio_name_key` ON `Studio`(`name`);
