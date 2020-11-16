import api from ".";
import { signUp } from "./auth";

export function fetchStudents() {
  return api.get("api/students");
}

interface CreateStudent {
  username: string;
  password: string;
  name: string;
  cpf: string;
  rg: string;
  birth_date: Date;
  cred_card_number: string;
  cred_card_issuer: string;
  cred_card_name: string;
  cred_card_cvv: string;
}

export function createStudent({
  username,
  password,
  name,
  cpf,
  rg,
  birth_date,
  cred_card_number,
  cred_card_issuer,
  cred_card_name,
  cred_card_cvv,
}: CreateStudent) {
  return signUp({
    username,
    password,
    enum_user: 0,
    name,
    cpf,
    rg,
    birth_date,
    cred_card_number,
    cred_card_issuer,
    cred_card_name,
    cred_card_cvv,
  });
}
