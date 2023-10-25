-- CreateTable
CREATE TABLE `Anime` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mal_id` INTEGER NOT NULL,
    `title` VARCHAR(191) NULL,
    `title_english` VARCHAR(191) NULL,
    `title_japanese` VARCHAR(191) NULL,
    `type` VARCHAR(191) NULL,
    `source` VARCHAR(191) NULL,
    `episodes` INTEGER NULL,
    `status` VARCHAR(191) NULL,
    `airing` BOOLEAN NULL,
    `airedFrom` DATETIME(3) NULL,
    `airedTo` DATETIME(3) NULL,
    `rating` VARCHAR(191) NULL,
    `score` DOUBLE NULL,
    `scored_by` INTEGER NULL,
    `rank` INTEGER NULL,
    `popularity` INTEGER NULL,
    `members` INTEGER NULL,
    `favorites` INTEGER NULL,
    `synopsis` TEXT NULL,
    `season` VARCHAR(191) NULL,
    `year` INTEGER NULL,
    `imagesId` INTEGER NOT NULL,
    `trailerId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Image` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `jpg_image_url` VARCHAR(191) NULL,
    `jpg_small_url` VARCHAR(191) NULL,
    `jpg_large_url` VARCHAR(191) NULL,
    `webp_image_url` VARCHAR(191) NULL,
    `webp_small_url` VARCHAR(191) NULL,
    `webp_large_url` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Trailer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `youtube_id` VARCHAR(191) NULL,
    `url` VARCHAR(191) NULL,
    `embed_url` VARCHAR(191) NULL,
    `maximum_img_url` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Producer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Producer_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Licensor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Licensor_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Studio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Studio_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Genre` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Genre_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_AnimeToProducer` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_AnimeToProducer_AB_unique`(`A`, `B`),
    INDEX `_AnimeToProducer_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_AnimeToLicensor` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_AnimeToLicensor_AB_unique`(`A`, `B`),
    INDEX `_AnimeToLicensor_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_AnimeToStudio` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_AnimeToStudio_AB_unique`(`A`, `B`),
    INDEX `_AnimeToStudio_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_AnimeToGenre` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_AnimeToGenre_AB_unique`(`A`, `B`),
    INDEX `_AnimeToGenre_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Anime` ADD CONSTRAINT `Anime_imagesId_fkey` FOREIGN KEY (`imagesId`) REFERENCES `Image`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Anime` ADD CONSTRAINT `Anime_trailerId_fkey` FOREIGN KEY (`trailerId`) REFERENCES `Trailer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AnimeToProducer` ADD CONSTRAINT `_AnimeToProducer_A_fkey` FOREIGN KEY (`A`) REFERENCES `Anime`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AnimeToProducer` ADD CONSTRAINT `_AnimeToProducer_B_fkey` FOREIGN KEY (`B`) REFERENCES `Producer`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AnimeToLicensor` ADD CONSTRAINT `_AnimeToLicensor_A_fkey` FOREIGN KEY (`A`) REFERENCES `Anime`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AnimeToLicensor` ADD CONSTRAINT `_AnimeToLicensor_B_fkey` FOREIGN KEY (`B`) REFERENCES `Licensor`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AnimeToStudio` ADD CONSTRAINT `_AnimeToStudio_A_fkey` FOREIGN KEY (`A`) REFERENCES `Anime`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AnimeToStudio` ADD CONSTRAINT `_AnimeToStudio_B_fkey` FOREIGN KEY (`B`) REFERENCES `Studio`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AnimeToGenre` ADD CONSTRAINT `_AnimeToGenre_A_fkey` FOREIGN KEY (`A`) REFERENCES `Anime`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AnimeToGenre` ADD CONSTRAINT `_AnimeToGenre_B_fkey` FOREIGN KEY (`B`) REFERENCES `Genre`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
