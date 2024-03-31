import { Hono } from "hono";

import { pushImage } from "../library/replicate";

const sharp = require("sharp");

export const image = new Hono();

image.post("/upload", async (c) => {
  const formData = await c.req.formData();
  const file = formData.get("image");

  if (!file) throw new Error("Must upload a picture.");

  const imgName = await crypto.randomUUID();

  await Bun.write(`uploads/${imgName}.png`, file);

  const modImg = await pushImage(imgName);

  return c.json({ img: modImg });
});
