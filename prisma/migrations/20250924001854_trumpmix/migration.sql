-- CreateTable
CREATE TABLE "public"."Trumpmix" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Trumpmix_pkey" PRIMARY KEY ("id")
);
