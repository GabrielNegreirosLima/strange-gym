import * as Yup from "yup";

export const ClassSchema = Yup.object().shape({
  modalityId: Yup.string()
    .required("O campo modalidade é obrigatório")
    .typeError("O campo modalidade é obrigatório"),
  scheduleId: Yup.string()
    .required("O campo horário é obrigatório")
    .typeError("O campo horário é obrigatório"),
  capacity: Yup.number()
    .required("O campo capacidade é obrigatório")
    .typeError("O campo capacidade é obrigatório"),
});
