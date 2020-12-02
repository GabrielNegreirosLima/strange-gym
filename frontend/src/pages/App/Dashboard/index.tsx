import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Card } from "primereact/card";

import { fetchStudents } from "../../../api/student";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux";
import { fetchTrainings } from "../../../api/training";

const Dashboard: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const [training, setTraining] = useState([]);
  const [students, setStudents] = useState([
    {
      name: "",
      id: -1,
      cpf: -1,
      rg: -1,
    },
  ]);

  useEffect(() => {
    async function fetch() {
      if (user?.enum_user === 0) {
        const { data } = await fetchTrainings();
        setTraining(data);
      } else {
        const { data } = await fetchStudents();

        setStudents(data);
      }
    }
    fetch();
  }, []);

  return (
    <Container>
      {user?.enum_user !== 0 ? (
        students.map(
          (s, i) =>
            s.id && (
              <Card key={s.id} title="" subTitle="">
                <CardContainer>
                  <span>Nome: </span>
                  <span>{s.name}</span>
                  <br />
                  <span>CPF: </span>
                  <span>{s.cpf}</span>
                  <br />
                  <span>RG: </span>
                  <span>{s.rg}</span>
                </CardContainer>
              </Card>
            )
        )
      ) : (
        <>
          <Card title="Aluno">
            <CardContainer>
              <span>Nome: </span>
              <span>{user.username}</span>
              <br />
              <span>Treino: </span>
              <br />
              <span>
                {training?.map((train: any) => {
                  if (train.enrollment?.studentId === user.student.id) {
                    return train?.description;
                  }
                })}
              </span>
              <br />
            </CardContainer>
          </Card>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  margin: 10px 30px;
  width: 100%;
  padding: 24px;
  border: 1px solid #a38d65;
  border-radius: 7px;
  box-shadow: 2px 4px 0 rgba(0, 0, 0, 0.24);
`;

const CardContainer = styled.div`
  padding-top: 5px;
`;
export default Dashboard;
