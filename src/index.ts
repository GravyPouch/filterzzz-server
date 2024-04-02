import { Hono } from "hono";

import { image } from "./routes/image";
import { filters } from "./routes/filters";

const app = new Hono();

app.route("/image", image);

app.route("/filters", filters);

app.get("/", async (c) => {
  const res = {};
  return c.json(res);
});

export default app;
