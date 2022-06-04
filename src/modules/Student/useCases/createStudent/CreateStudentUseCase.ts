import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { AccountEnum } from "../../../Account/dtos/CreateAccountDTO";
import { CreateStudentDTO } from "../../dtos/CreateStudentDTO";

export class CreateStudentUseCase {
  async execute(student: CreateStudentDTO) {
    const Account = await prisma.account.findFirst({
      where: {
        id: student.accountId
      },
      include: {
        Student: true
      }
    });
    if (Account?.Student) {
      throw new AppError("Account Already have a student");
    }
    if (Account?.role !== AccountEnum.STUDENT) {
      throw new AppError("Account is not a student");
    }

    const createdStudent = await prisma.student.create({
      data: {
        account_id: student.accountId,
        class: student.studentClass,
        grade: student.studentGrade,
        name: student.name
      }
    });

    return createdStudent;
  }
}
