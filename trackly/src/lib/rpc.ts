import { hc } from "hono/client";
import type { AppType } from "@/app/api/[[...routes]]/route";

// ✅ Proper assignment with =
export const client = hc<AppType>(process.env.NEXT_PUBLIC_APP_URL ?? "/api");
