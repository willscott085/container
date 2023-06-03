import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const transactionRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        title: z.string(),
        amount: z.number(),
        memo: z.string().optional(),
        category: z.string(),
      })
    )
    .query(({ input, ctx }) => {
      return ctx.prisma.transaction.create({ data: input });
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.transaction.findMany();
  }),
});
