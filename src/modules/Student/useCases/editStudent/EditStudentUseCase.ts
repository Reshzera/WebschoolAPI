import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateStudentDTO } from "../../dtos/CreateStudentDTO";

export class EditStudentUseCase {
  async execute(student: CreateStudentDTO) {
    const Student = await prisma.student.findUnique({
      where: {
        account_id: student.accountId
      }
    });
    if (!Student) {
      throw new AppError("Student not found");
    }
    const EditedStudent = await prisma.student.update({
      where: {
        account_id: student.accountId
      },
      data: {
        class: student.studentClass,
        grade: student.studentGrade,
        name: student.name
      }
    });

    return EditedStudent;
  }
}
