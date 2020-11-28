import * as Yup from "yup";

export const TrainingSchema = Yup.object().shape({
  description: Yup.string()
    .required("O campo descrição é obrigatório")
    .typeError("O campo descrição é obrigatório"),
  enrollmentId: Yup.string()
    .required("O campo matrícula é obrigatório")
    .typeError("O campo matrícula é obrigatório"),
});
