import { Request, Response } from "express";
import { AppError } from "../../../../errors/AppError";
import { AccountEnum } from "../../dtos/CreateAccountDTO";
import { CreateAccountUseCase } from "./CreateAccountUseCase";

export class CreateAccountController {
  async Handle(req: Request, res: Response) {
    const { email, role, password } = req.body;

    const createAccountUseCase = new CreateAccountUseCase();

    if (!Object.values(AccountEnum).includes(role)) {
      throw new AppError("Invalid Role");
    }

    if (email && role && password) {
      const result = await createAccountUseCase.execute({
        email,
        role,
        password
      });

      return res.status(201).json(result);
    }
    throw new AppError("invalid payload");
  }
}
