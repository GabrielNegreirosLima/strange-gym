import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchEnrollments, createEnrollment } from "../../../api/enrollment";
import { fetchPlans } from "../../../api/plan";
import { fetchStudents } from "../../../api/student";
import { Plan, Student } from "../../../api/types";
// import { Enrollment } from "../../../api/types";
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

import { EnrollmentContainer } from "./styles";
import { EnrollmentSchema } from "./validations";

function Enrollment() {
  const [enrollments, setEnrollments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [students, setStudents] = useState([]);
  const [plans, setPlans] = useState([]);

  const { user } = useSelector((state: RootState) => state.auth);

  function handleSubmit(values: any) {
    setIsLoading(true);

    const newEnrollment = {
      studentId: values.studentId,
      plansId: values.plansId,
    };

    createEnrollment({ ...newEnrollment })
      .then((result) => {
        alert("Matrícula cadastrada com sucesso!");
      })
      .catch((err) => {
        alert("Falha ao realizar o cadastro");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    fetchStudents().then((response) => {
      setStudents(response.data);
    });
    fetchPlans().then((response) => {
      setPlans(response.data);
    });
  }, []);

  return (
    <EnrollmentContainer>
      <FormTitle>Matricula do aluno</FormTitle>
      <ContentWrapper>
        <Formik
          initialValues={{
            studentId: null,
            plansId: null,
          }}
          enableReinitialize
          validationSchema={EnrollmentSchema}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          {({ errors, touched, values }) => (
            <FormWrapper>
              <Form>
                <Input select label="Aluno" name="studentId" type="text">
                  <option value={undefined} selected>
                    Selecione o aluno
                  </option>
                  {students.map((student: Student) => (
                    <option value={student.id}>{student.name}</option>
                  ))}
                </Input>

                <Input select label="Planos" name="plansId" type="text">
                  <option value={undefined} selected>
                    Selecione o plano
                  </option>
                  {plans.map((plan: Plan) => (
                    <option value={plan.id}>
                      {plan.frequency}x - {plan.billing_frequency} - R$
                      {plan.price}
                    </option>
                  ))}
                </Input>

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
    </EnrollmentContainer>
  );
}

export default Enrollment;
