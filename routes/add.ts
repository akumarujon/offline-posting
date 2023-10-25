import { app, kv } from "../config/mod.ts";
import { HonoContext } from "../deps.ts";

app.get('/add',async(ctx: HonoContext) => {
    return ctx.html(await Deno.readTextFile(`${Deno.cwd()}/templates/add.html`))
})

app.post('/add', async(ctx: HonoContext) => {
    const { text } = await ctx.req.parseBody()

    await kv.set(["channel_id"], text);
    return ctx.text("Channel is added succesfully.");
})