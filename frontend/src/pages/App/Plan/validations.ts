import * as Yup from "yup";

export const PlanSchema = Yup.object().shape({
  modalityId: Yup.string()
    .required("O campo modalidade é obrigatório")
    .typeError("O campo modalidade é obrigatório"),
  frequency: Yup.string()
    .required("O campo frequência é obrigatório")
    .typeError("O campo frequência é obrigatório"),
  billing_frequency: Yup.string()
    .required("O campo pagamento é obrigatório")
    .typeError("O campo pagamento é obrigatório"),
  price: Yup.string()
    .required("O campo preço é obrigatório")
    .typeError("O campo preço é obrigatório"),
});
