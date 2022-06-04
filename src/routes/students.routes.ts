import { Router } from "express";
import { CreateStudentController } from "../modules/Student/useCases/createStudent/CreateStudentController";
import { EditStudentController } from "../modules/Student/useCases/editStudent/EditStudentController";

const createStudentController = new CreateStudentController();
const editStudentController = new EditStudentController();

const studentRoutes = Router();

studentRoutes.post("/", createStudentController.Handle);
studentRoutes.put("/", editStudentController.Handle);

export { studentRoutes };
