import { prisma } from "../../../../prisma/client";
import { AccountFillters } from "../../dtos/FindAccountFillters";

export class FindAccountUseCase {
  async execute(fillter: AccountFillters) {
    if (fillter.email || fillter.role) {
      const list = await prisma.account.findMany({
        where: {
          email: fillter.email === "" ? undefined : fillter.email,
          role: fillter.role
        }
      });
      return list;
    }
    const list = await prisma.account.findMany();
    return list;
  }
}
