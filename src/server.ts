import express from "express";
import routesConfig from './routes'

const app = express();

app.get("/", (_, res) => {
  res.send("Hello ts-node!");
});

routesConfig(app);
export default app;