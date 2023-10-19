import './actions/mod.ts'
import { app } from "./config/app.ts"

const PORT = Deno.env.get("PORT") as unknown as number;

console.log(`http://localhost:${PORT}`);
await app.listen({ port: PORT});
