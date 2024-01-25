import './routes/mod.ts'
import { app } from "./config/mod.ts"

Deno.serve({hostname: "0.0.0.0", port: 5000},app.fetch)
