-- CreateTable
CREATE TABLE "Todo" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "done" BOOLEAN DEFAULT false,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);
