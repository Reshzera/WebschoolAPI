import { Request, Response } from "express";
import { AppError } from "../../../../errors/AppError";
import {
  StudentCalssEnum,
  StudentGradeEnum
} from "../../dtos/CreateStudentDTO";
import { CreateStudentUseCase } from "./CreateStudentUseCase";

export class CreateStudentController {
  async Handle(req: Request, res: Response) {
    const { studentClass, name, studentGrade, accountId } = req.body;
    const createStudentUseCase = new CreateStudentUseCase();

    if (!Object.values(StudentCalssEnum).includes(studentClass)) {
      throw new AppError("Invalid studentClass");
    }
    if (!Object.values(StudentGradeEnum).includes(studentGrade)) {
      throw new AppError("Invalid studentGrade");
    }

    if (studentClass && name && studentGrade && accountId) {
      const result = await createStudentUseCase.execute({
        studentClass,
        name,
        studentGrade,
        accountId
      });
      return res.status(201).json(result);
    }

    throw new AppError("Invalid fileds");
  }
}
