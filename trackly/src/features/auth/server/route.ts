import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { LoginSchema } from "./LoginSchema";

const auth = new Hono();

auth.post("/login", zValidator("json", LoginSchema), (c) => {
  const {email,password} = c.req.valid("json"); 
  return c.json({ success: true, user:{email,password} });
});

export default auth;
