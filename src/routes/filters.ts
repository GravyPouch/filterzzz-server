import { Hono } from "hono";

import { FilterPrompt, GetAllPrompts } from "../library/promptHelper";

export const filters = new Hono();

filters.get("/all", async (c) => {
  const res = await GetAllPrompts();
  const filterRes = await FilterPrompt(res);

  return c.json({ filters: filterRes });
});
