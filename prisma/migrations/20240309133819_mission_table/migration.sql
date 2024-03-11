-- AlterTable
ALTER TABLE `missionsummary` ADD COLUMN `dosage` DOUBLE NULL,
    ADD COLUMN `dropletSize` DOUBLE NULL,
    ADD COLUMN `flowrate` DOUBLE NULL,
    ADD COLUMN `latitude` DOUBLE NULL,
    ADD COLUMN `longitude` DOUBLE NULL,
    ADD COLUMN `maxHeight` DOUBLE NULL,
    ADD COLUMN `maxSpeed` DOUBLE NULL;
