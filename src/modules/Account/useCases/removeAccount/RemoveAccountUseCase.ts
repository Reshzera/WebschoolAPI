import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { RemoveAccountDTO } from "../../dtos/RemoveAccountDTO";

export class RemoveAccountUseCase {
  async execute(account: RemoveAccountDTO) {
    const emailExists = await prisma.account.findUnique({
      where: {
        email: account.email
      }
    });
    if (!emailExists) {
      throw new AppError("Account does not exist");
    }
    if (emailExists.password !== account.password) {
      throw new AppError("Wrong passowrd");
    }
    const removedAccount = await prisma.account.delete({
      where: {
        email: account.email
      }
    });

    return removedAccount;
  }
}
