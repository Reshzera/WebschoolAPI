import { Request, Response } from "express";
import { AppError } from "../../../../errors/AppError";
import {
  StudentCalssEnum,
  StudentGradeEnum
} from "../../dtos/CreateStudentDTO";
import { EditStudentUseCase } from "./EditStudentUseCase";

export class EditStudentController {
  async Handle(req: Request, res: Response) {
    const { name, studentGrade, studentClass, accountId } = req.body;
    const editStudentUseCase = new EditStudentUseCase();

    if (!Object.values(StudentCalssEnum).includes(studentClass)) {
      throw new AppError("Invalid studentClass");
    }
    if (!Object.values(StudentGradeEnum).includes(studentGrade)) {
      throw new AppError("Invalid studentGrade");
    }

    if (accountId) {
      const result = await editStudentUseCase.execute({
        name,
        studentGrade,
        studentClass,
        accountId
      });
      return res.status(200).json(result);
    }
    throw new AppError("Invalid accountId");
  }
}
