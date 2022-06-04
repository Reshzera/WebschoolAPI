export enum StudentGradeEnum {
  FIRST_HIGHSCHOOL = "FIRST_HIGHSCHOOL",
  SECOND_HIGHSCHOOL = "SECOND_HIGHSCHOOL",
  THIRD_HIGHSCHOOL = "THIRD_HIGHSCHOOL"
}

export enum StudentCalssEnum {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  E = "E",
  F = "F",
  G = "G"
}

export interface CreateStudentDTO {
  name: string;
  studentGrade: StudentGradeEnum;
  studentClass: StudentCalssEnum;
  accountId: string;
}
