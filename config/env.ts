import { kv } from "./kv.ts"

const chat_id = (await kv.get(['channel_id'])).value as string;

export { chat_id };