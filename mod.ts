import './actions/mod.ts'
import { app } from "./config/mod.ts"

Deno.serve(app.fetch)
