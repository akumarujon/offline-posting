import { join } from "https://deno.land/std@0.198.0/path/join.ts";
import { router } from "../config/app.ts";
import { Context, InputFile } from "../deps.ts";
import { bot, chat_id } from "../config/mod.ts";

router.get("/", async (ctx: Context) => {
  const body = await Deno.readTextFile(`${Deno.cwd()}/templates/index.html`);
  ctx.response.body = body;
});

router.post("/media", async (ctx: Context) => {
  const body = ctx.request.body({ type: "form-data" });
  const file = await body.value.read({ outPath: join(Deno.cwd(), "out") });
  const filename = file.files[0].filename as string;
  const caption = file.fields.text;

  console.log("OK");
  bot.api.sendPhoto(chat_id, new InputFile(filename), {
    caption,
  });

  ctx.response.body = "Message is sent.";
});

router.post("/text", async (ctx: Context) => {
  const body = await ctx.request.body({ type: "form" }).value;

  for (const [_key, text] of body) {
    await bot.api.sendMessage(chat_id, text, {
      parse_mode: "Markdown",
    });
  }

  ctx.response.body = "Message is sent."
});
