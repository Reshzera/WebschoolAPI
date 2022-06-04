import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateAccountDTO, AccountEnum } from "../../dtos/CreateAccountDTO";

export class CreateAccountUseCase {
  async execute(account: CreateAccountDTO) {
    const emailExists = await prisma.account.findUnique({
      where: {
        email: account.email
      }
    });

    if (emailExists) {
      throw new AppError("Email already exists");
    }

    const newAccount = await prisma.account.create({
      data: {
        email: account.email,
        password: account.password,
        role: account.role
      }
    });

    return newAccount;
  }
}
