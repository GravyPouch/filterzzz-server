import { Hono } from "hono";

import { pushImage } from "../library/replicate";

export const image = new Hono();

image.post("/upload", async (c) => {
  const formData = await c.req.formData();
  const filter = formData.get("filter");
  const file = formData.get("image");

  if (!file) throw new Error("Must upload a picture.");

  const imgName = await crypto.randomUUID();

  await Bun.write(`uploads/${imgName}.jpg`, file);

  const modImg = await pushImage(imgName, filter);

  return c.json({ img: modImg });
});
