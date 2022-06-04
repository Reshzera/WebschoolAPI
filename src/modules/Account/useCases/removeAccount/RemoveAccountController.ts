import { Request, Response } from "express";
import { AppError } from "../../../../errors/AppError";
import { RemoveAccountUseCase } from "./RemoveAccountUseCase";

export class RemoveAccountController {
  async Handle(req: Request, res: Response) {
    const { email, password } = req.body;

    const removeAccountUseCase = new RemoveAccountUseCase();

    if (email && password) {
      const result = await removeAccountUseCase.execute({
        email,
        password
      });

      return res.status(200).json(result);
    }
    throw new AppError("Missing information");
  }
}
