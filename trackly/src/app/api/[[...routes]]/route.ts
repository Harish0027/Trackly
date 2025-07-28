import { Hono } from "hono";
import { handle } from "hono/vercel";
import auth from "@/features/auth/server/route";

const app = new Hono().basePath("/api");

app.route("/auth", auth); // ✅ no unused vars

export const GET = handle(app);
export const POST = handle(app);

// ✅ correct type export for hc<APPtype>()
export type AppType = typeof app;
