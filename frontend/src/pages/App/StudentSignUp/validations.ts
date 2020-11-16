import * as Yup from "yup";

export const StudentSignUpSchema = Yup.object().shape({
  username: Yup.string()
    .required("O campo usuário é obrigatório")
    .typeError("O campo usuário é obrigatório"),
  password: Yup.string()
    .required("O campo senha é obrigatório")
    .typeError("O campo senha é obrigatório"),
  name: Yup.string()
    .required("O campo nome é obrigatório")
    .typeError("O campo nome é obrigatório"),
  cpf: Yup.string()
    .required("O campo CPF é obrigatório")
    .typeError("O campo CPF é obrigatório"),
  rg: Yup.string()
    .required("O campo RG é obrigatório")
    .typeError("O campo RG é obrigatório"),
  birth_date: Yup.string()
    .required("O campo data de nascimento é obrigatório")
    .typeError("O campo data de nascimento é obrigatório"),
  cred_card_name: Yup.string()
    .required("O campo nome do cartão de crédito é obrigatório")
    .typeError("O campo nome do cartão de crédito é obrigatório"),
  cred_card_number: Yup.string()
    .required("O campo número do cartão de crédito é obrigatório")
    .typeError("O campo número do cartão de crédito é obrigatório"),
  cred_card_cvv: Yup.string()
    .required("O campo CVV é obrigatório")
    .typeError("O campo CVV é obrigatório"),
  cred_card_issuer: Yup.string()
    .required("O campo bandeira é obrigatório")
    .typeError("O campo bandeira é obrigatório"),
  cred_card_expiration: Yup.string()
    .required("O campo validade é obrigatório")
    .typeError("O campo validade é obrigatório"),
});
