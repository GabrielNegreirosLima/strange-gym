import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { fetchModalities } from "../../../api/modality";
import { createPlan, fetchPlans } from "../../../api/plan";
import { Modality } from "../../../api/types";
// import { Plan } from "../../../api/types";
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

import { PlanContainer } from "./styles";
import { PlanSchema } from "./validations";

function Plan() {
  const [isLoading, setIsLoading] = useState(false);
  const [modalities, setModalities] = useState([]);

  function handleSubmit(values: any) {
    setIsLoading(true);
    const newPlan = {
      modalityId: values.modalityId,
      frequency: values.frequency,
      billing_frequency: values.billing_frequency,
      price: Number(values.price.replace("R$", "")),
    };

    createPlan({ ...newPlan })
      .then((result) => {
        alert("Plano cadastrado com sucesso!");
      })
      .catch((err) => {
        alert("Falha ao realizar o cadastro");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    fetchModalities().then((response) => {
      setModalities(response.data);
    });
  }, []);

  return (
    <PlanContainer>
      <FormTitle>Cadastro de plano</FormTitle>
      <ContentWrapper>
        <Formik
          initialValues={{
            modalityId: null,
            frequency: "",
            billing_frequency: "",
            price: null,
          }}
          enableReinitialize
          validationSchema={PlanSchema}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          {({ errors, touched, values }) => (
            <FormWrapper>
              <Form>
                <Input select label="Modalidade" name="modalityId" type="text">
                  <option value={undefined} selected>
                    Selecione a modalidade
                  </option>
                  {modalities.map((modality: Modality) => (
                    <option value={modality.id}>{modality.name}</option>
                  ))}
                </Input>
                <Input select label="Frequência" name="frequency" type="text">
                  <option value={undefined} selected>
                    Selecione a frequência
                  </option>
                  <option value="2">2x</option>
                  <option value="3">3x</option>
                  <option value="4">4x</option>
                  <option value="5">5x</option>
                  <option value="6">6x</option>
                  <option value="7">7x</option>
                </Input>

                <Input
                  select
                  label="Frequência de pagamento"
                  name="billing_frequency"
                  type="text"
                >
                  <option value={undefined} selected>
                    Selecione a frequência de pagamento
                  </option>

                  <option value="monthly">Mensal</option>
                  <option value="semiannual">Semestral</option>
                  <option value="yearly">Anual</option>
                </Input>

                <Input label="Preço" name="price" money />

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
    </PlanContainer>
  );
}

export default Plan;
