import { InputFile, HonoContext } from "../deps.ts";
import { app, bot, chat_id } from "../config/mod.ts";

app.get("/", async (ctx: HonoContext) => {
  const body = await Deno.readTextFile(`${Deno.cwd()}/templates/index.html`);
  return ctx.html(body);
});

app.post("/media", async (ctx:HonoContext) => {
  const body = await ctx.req.parseBody();
  const caption = body.text;

  bot.api.sendPhoto(chat_id, new InputFile(body.file), {
    caption: caption as string
  });

  return ctx.text("Message is sent.")
});

app.post("/text", async(ctx: HonoContext) => {

  await bot.api.sendMessage(chat_id, (await ctx.req.parseBody()).text as string, 
    {
      parse_mode: "Markdown",
    }
  );
  return ctx.text("Message is sent.")
});
