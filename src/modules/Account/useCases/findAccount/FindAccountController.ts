import { Request, Response } from "express";
import { AccountFillters } from "../../dtos/FindAccountFillters";
import { FindAccountUseCase } from "./FindAccountUseCase";

export class FindAccountController {
  async Handle(req: Request, res: Response) {
    const { email, role } = req.query;
    const findAccountUseCase = new FindAccountUseCase();
    const result = await findAccountUseCase.execute({
      email,
      role
    } as AccountFillters);

    return res.status(200).json(result);
  }
}
