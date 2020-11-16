import * as Yup from "yup";

export const ModalitySchema = Yup.object().shape({
  name: Yup.string()
    .required("O campo nome é obrigatório")
    .typeError("O campo nome é obrigatório"),
});
