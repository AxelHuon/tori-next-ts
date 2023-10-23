-- AlterTable
ALTER TABLE `Anime` MODIFY `type` VARCHAR(191) NULL,
    MODIFY `source` VARCHAR(191) NULL,
    MODIFY `episodes` INTEGER NULL,
    MODIFY `status` VARCHAR(191) NULL,
    MODIFY `airing` BOOLEAN NULL,
    MODIFY `rating` VARCHAR(191) NULL,
    MODIFY `score` DOUBLE NULL,
    MODIFY `scored_by` INTEGER NULL,
    MODIFY `rank` INTEGER NULL,
    MODIFY `popularity` INTEGER NULL,
    MODIFY `members` INTEGER NULL,
    MODIFY `favorites` INTEGER NULL,
    MODIFY `synopsis` TEXT NULL,
    MODIFY `season` VARCHAR(191) NULL,
    MODIFY `year` INTEGER NULL,
    MODIFY `airedFrom` DATETIME(3) NULL,
    MODIFY `airedTo` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `Image` MODIFY `jpg_image_url` VARCHAR(191) NULL,
    MODIFY `jpg_small_url` VARCHAR(191) NULL,
    MODIFY `jpg_large_url` VARCHAR(191) NULL,
    MODIFY `webp_image_url` VARCHAR(191) NULL,
    MODIFY `webp_small_url` VARCHAR(191) NULL,
    MODIFY `webp_large_url` VARCHAR(191) NULL;
