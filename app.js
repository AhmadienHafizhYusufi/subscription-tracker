import e from "express";

import { PORT } from "./config/env.js";

const app = e();

app.get("/", (req, res) => {
  res.send("Welcome to the subscription Tracker API!");
});

app.listen(PORT, () => {
  console.log(
    `Subscription Tracker API is running on http://localhost:${PORT}`
  );
});

export default app;
