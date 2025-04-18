import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const ToDoRouter = createTRPCRouter({
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const todo = await ctx.db.toDo.findUnique({
        where: {
          id: parseInt(input.id),
        },  
      });
      return todo;
    }),

  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      const user = ctx.user;
      if (!user) {
        throw new Error("Unauthorized");
      }
      const todo = await ctx.db.toDo.create({
        data: {
          name: input.name,
          userId: user.id,
        },
      });

      return todo;
    }),

  getAll: publicProcedure.query(async ({ ctx }) => {
    const user = ctx.user;
    if (!user) {
      throw new Error("Unauthorized");
    }
    console.log(user.id);
    console.log(user);
    console.log(" ");
    const todos = await ctx.db.toDo.findMany({
      where: {
        userId: user.id,
      }
    })
    return todos || [];
  }),
});
