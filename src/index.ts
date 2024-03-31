import { Hono } from "hono";

import { image } from "./routes/image";

const app = new Hono();

app.route("/image", image);

app.get("/", async (c) => {
  return c.text("Hello Hono!");
});

export default app;
