import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchModalities, createModality } from "../../../api/modality";
// import { Modality } from "../../../api/types";
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

import { ModalityContainer } from "./styles";
import { ModalitySchema } from "./validations";

function Modality() {
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(values: any) {
    setIsLoading(true);
    const newModality = {
      name: values.name,
    };

    createModality({ ...newModality })
      .then((result) => {
        alert("Modalidade cadastrada com sucesso!");
      })
      .catch((err) => {
        alert("Falha ao realizar o cadastro");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <ModalityContainer>
      <FormTitle>Cadastro de modalidade</FormTitle>
      <ContentWrapper>
        <Formik
          initialValues={{
            name: "",
          }}
          enableReinitialize
          validationSchema={ModalitySchema}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          {({ errors, touched, values }) => (
            <FormWrapper>
              <Form>
                <Input
                  label="Nome"
                  name="name"
                  type="string"
                  placeholder="Ex: Natação"
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
    </ModalityContainer>
  );
}

export default Modality;
