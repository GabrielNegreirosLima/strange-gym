import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchStudents, createStudent } from "../../../api/student";
import { Student } from "../../../api/types";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import {
  ContentWrapper,
  FormTitle,
  FormWrapper,
  Row,
  TitleSection,
} from "../../../components/ScreenComponents";
import { RootState } from "../../../redux";

import { StudentSignUpContainer } from "./styles";
import { StudentSignUpSchema } from "./validations";

function StudentSignUp() {
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(values: any) {
    setIsLoading(true);
    const newStudent = {
      username: values.username,
      password: values.password,
      name: values.name,
      cpf: values.cpf,
      rg: values.rg,
      birth_date: values.birth_date,
      cred_card_number: values.cred_card_number,
      cred_card_issuer: values.cred_card_issuer,
      cred_card_name: values.cred_card_name,
      cred_card_cvv: values.cred_card_cvv,
    };

    createStudent({ ...newStudent })
      .then((result) => {
        alert("Treino cadastrado com sucesso!");
      })
      .catch((err) => {
        alert("Falha ao realizar o cadastro");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <StudentSignUpContainer>
      <FormTitle>Cadastro de aluno</FormTitle>
      <ContentWrapper>
        <Formik
          initialValues={{
            username: "",
            password: "",
            name: "",
            cpf: "",
            rg: "",
            birth_date: null,
            cred_card_number: "",
            cred_card_issuer: "",
            cred_card_name: "",
            cred_card_cvv: "",
            cred_card_expiration: null,
          }}
          enableReinitialize
          validationSchema={StudentSignUpSchema}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          {({ errors, touched, values }) => (
            <FormWrapper>
              <Form>
                <Input
                  label="Usuário"
                  name="username"
                  type="string"
                  placeholder="Ex: anamaria"
                />
                <Input label="Senha" name="password" type="password" />
                <Input
                  label="Nome"
                  name="name"
                  type="string"
                  placeholder="Ex: Ana Maria"
                />
                <Input
                  label="CPF"
                  name="cpf"
                  type="text"
                  placeholder="Ex: 012.345.678-99"
                />
                <Input
                  label="RG"
                  name="rg"
                  type="text"
                  placeholder="Ex: 11.222.333"
                />
                <Input
                  label="Data de nascimento"
                  name="birth_date"
                  type="date"
                  placeholder="Ex: 14/01/2000"
                />

                <Row>
                  <Input
                    label="Número do cartão"
                    name="cred_card_number"
                    type="number"
                    placeholder="Ex: 1111 2222 3333 4444"
                  />
                  <Input
                    label="Nome do cartão"
                    name="cred_card_name"
                    type="text"
                    placeholder="Ex: ANA M SOUZA"
                  />
                </Row>

                <Row>
                  <Input
                    label="Validade do cartão"
                    name="cred_card_expiration"
                    type="text"
                    placeholder="Ex: 01/2000"
                  />
                  <Input
                    select
                    label="Bandeira do cartão"
                    name="cred_card_issuer"
                    type="text"
                  >
                    <option value={undefined} selected>
                      Selecione a bandeira
                    </option>
                    <option value="mastercard">Mastercard</option>
                    <option value="visa">Visa</option>
                    <option value="elo">Elo</option>
                  </Input>
                </Row>

                <Input
                  label="CVV do cartão"
                  name="cred_card_cvv"
                  type="number"
                  placeholder="Ex: 542"
                />

                <Button
                  title="Salvar"
                  primary
                  type="submit"
                  isLoading={isLoading}
                />
              </Form>
            </FormWrapper>
          )}
        </Formik>
      </ContentWrapper>
    </StudentSignUpContainer>
  );
}

export default StudentSignUp;
