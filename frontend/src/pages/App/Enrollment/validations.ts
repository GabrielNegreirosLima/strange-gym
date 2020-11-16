import * as Yup from "yup";

export const EnrollmentSchema = Yup.object().shape({
  studentId: Yup.string()
    .required("O campo aluno é obrigatório")
    .typeError("O campo aluno é obrigatório"),
  plansId: Yup.string()
    .required("O campo plano é obrigatório")
    .typeError("O campo plano é obrigatório"),
});
