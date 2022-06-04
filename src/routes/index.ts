import { Router } from "express";
import { accountRoutes } from "./account.routes";
import { studentRoutes } from "./students.routes";

const routes = Router();

routes.use("/accounts", accountRoutes);
routes.use("/students", studentRoutes);

export { routes };
