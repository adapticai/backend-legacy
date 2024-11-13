/*
  Warnings:

  - You are about to drop the column `config` on the `Dependency` table. All the data in the column will be lost.
  - You are about to drop the column `stepId` on the `Dependency` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name,type]` on the table `Dependency` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Dependency" DROP CONSTRAINT "Dependency_stepId_fkey";

-- DropIndex
DROP INDEX "Dependency_stepId_idx";

-- AlterTable
ALTER TABLE "Dependency" DROP COLUMN "config",
DROP COLUMN "stepId",
ADD COLUMN     "website" TEXT;

-- AlterTable
ALTER TABLE "Workspace" ADD COLUMN     "colors" JSONB;

-- CreateTable
CREATE TABLE "Documentation" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "dependencyId" UUID NOT NULL,
    "tagId" UUID,

    CONSTRAINT "Documentation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subsection" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "documentationId" UUID NOT NULL,

    CONSTRAINT "Subsection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Example" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "documentationId" UUID,
    "subsectionId" UUID,

    CONSTRAINT "Example_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "documentationId" UUID,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UseCase" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "documentationId" UUID NOT NULL,

    CONSTRAINT "UseCase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ActionToDependency" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_DependencyToStep" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE INDEX "Documentation_dependencyId_idx" ON "Documentation"("dependencyId");

-- CreateIndex
CREATE INDEX "Subsection_documentationId_idx" ON "Subsection"("documentationId");

-- CreateIndex
CREATE INDEX "Example_documentationId_idx" ON "Example"("documentationId");

-- CreateIndex
CREATE INDEX "Example_subsectionId_idx" ON "Example"("subsectionId");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_name_key" ON "Tag"("name");

-- CreateIndex
CREATE INDEX "UseCase_documentationId_idx" ON "UseCase"("documentationId");

-- CreateIndex
CREATE UNIQUE INDEX "_ActionToDependency_AB_unique" ON "_ActionToDependency"("A", "B");

-- CreateIndex
CREATE INDEX "_ActionToDependency_B_index" ON "_ActionToDependency"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DependencyToStep_AB_unique" ON "_DependencyToStep"("A", "B");

-- CreateIndex
CREATE INDEX "_DependencyToStep_B_index" ON "_DependencyToStep"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Dependency_name_type_key" ON "Dependency"("name", "type");

-- AddForeignKey
ALTER TABLE "Documentation" ADD CONSTRAINT "Documentation_dependencyId_fkey" FOREIGN KEY ("dependencyId") REFERENCES "Dependency"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subsection" ADD CONSTRAINT "Subsection_documentationId_fkey" FOREIGN KEY ("documentationId") REFERENCES "Documentation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Example" ADD CONSTRAINT "Example_documentationId_fkey" FOREIGN KEY ("documentationId") REFERENCES "Documentation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Example" ADD CONSTRAINT "Example_subsectionId_fkey" FOREIGN KEY ("subsectionId") REFERENCES "Subsection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_documentationId_fkey" FOREIGN KEY ("documentationId") REFERENCES "Documentation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UseCase" ADD CONSTRAINT "UseCase_documentationId_fkey" FOREIGN KEY ("documentationId") REFERENCES "Documentation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ActionToDependency" ADD CONSTRAINT "_ActionToDependency_A_fkey" FOREIGN KEY ("A") REFERENCES "Action"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ActionToDependency" ADD CONSTRAINT "_ActionToDependency_B_fkey" FOREIGN KEY ("B") REFERENCES "Dependency"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DependencyToStep" ADD CONSTRAINT "_DependencyToStep_A_fkey" FOREIGN KEY ("A") REFERENCES "Dependency"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DependencyToStep" ADD CONSTRAINT "_DependencyToStep_B_fkey" FOREIGN KEY ("B") REFERENCES "Step"("id") ON DELETE CASCADE ON UPDATE CASCADE;
