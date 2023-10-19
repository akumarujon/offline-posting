import { Application, Router } from "../deps.ts";
const app = new Application();
const router = new Router();

app.use(router.routes())
app.use(router.allowedMethods())

export { app, router };