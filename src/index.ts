import express, { RequestHandler } from "express";

import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json() as RequestHandler);

app.use("/users", usersRoutes);

export { app };
