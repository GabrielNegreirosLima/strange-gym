import React from "react";
import { useHistory } from "react-router-dom";

import styled from "styled-components";

export const LeftMenuContainer = styled.div`
  width: 120px;
  height: 100vh;
  background-color: #fff;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.24);

  padding: 8px;
`;
export const LeftMenuItemContainer = styled.a`
  height: 48px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin-bottom: 8px;
`;
export const LeftMenuItemText = styled.span`
  color: #343a40;
  text-align: left;
`;

const menuItens = [
  {
    label: "Dashboard",
    page: "/",
  },
  {
    label: "Cadastro de aluno",
    page: "/studentSignUp",
  },
  {
    label: "Matricula de aluno",
    page: "/enrollment",
  },
  {
    label: "Cadastro de plano",
    page: "/plan",
  },
  {
    label: "Teste de aptidão física (only Doctor)",
    page: "/physicalFitnessTest",
  },
  {
    label: "Modalidades",
    page: "/modality",
  },
  {
    label: "Cadastro de horário",
    page: "/schedule",
  },
  {
    label: "Cadastro de turmas",
    page: "/class",
  },
  {
    label: "Cadastro de treino (only Teacher)",
    page: "/training",
  },
];

interface LeftMenuItemProps {
  label: string;
  page: string;
}
function LeftMenuItem({ label, page }: LeftMenuItemProps) {
  const history = useHistory();
  return (
    <LeftMenuItemContainer onClick={() => history.push(page)}>
      <LeftMenuItemText>{label}</LeftMenuItemText>
    </LeftMenuItemContainer>
  );
}

function LeftMenu() {
  return (
    <LeftMenuContainer>
      {menuItens.map((menu) => (
        <LeftMenuItem label={menu.label} page={menu.page} />
      ))}
    </LeftMenuContainer>
  );
}

export default LeftMenu;
