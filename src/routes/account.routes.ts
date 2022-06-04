import { Router } from "express";
import { CreateAccountController } from "../modules/Account/useCases/createAccount/CreateAccountController";
import { FindAccountController } from "../modules/Account/useCases/findAccount/FindAccountController";
import { RemoveAccountController } from "../modules/Account/useCases/removeAccount/RemoveAccountController";

const createAccountController = new CreateAccountController();
const removeAccountController = new RemoveAccountController();
const findAccountController = new FindAccountController();

const accountRoutes = Router();

accountRoutes.post("/", createAccountController.Handle);
accountRoutes.delete("/", removeAccountController.Handle);
accountRoutes.get("/", findAccountController.Handle);

export { accountRoutes };
