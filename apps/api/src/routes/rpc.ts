import { PrismaClient, enhance } from "@web-app/db";
import { ZenStackFastifyPlugin } from "@zenstackhq/server/fastify";
import type { FastifyPluginCallback } from "fastify";

const prisma = new PrismaClient();

export const rpc: FastifyPluginCallback = function (app) {
  app.register(ZenStackFastifyPlugin, {
    prefix: "",
    getPrisma: (req, rep) => enhance(prisma),
  });
};
