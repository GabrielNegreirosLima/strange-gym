import React, { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../redux";
import MenuItem from "./SidebarItem";

interface Item {
  label: string;
  link: string;
}
const menuItemsDoctor = [
  {
    label: "Dashboard",
    link: "/",
  },
  {
    label: "Teste Fisico",
    link: "/create/fisical-test",
  },
  {
    label: "Sair",
    link: "/signin",
  },
];
const menuItemsSecretary = [
  {
    label: "Dashboard",
    link: "/",
  },
  {
    label: "Cadastrar Estudante",
    link: "/create/student",
  },
  {
    label: "Cadastrar Modalidade",
    link: "/create/modality",
  },
  {
    label: "Matricular Aluno",
    link: "/create/enrollment",
  },
  {
    label: "Cadastrar Plano",
    link: "/create/plan",
  },
  {
    label: "Cadastrar Turma",
    link: "/create/class",
  },
  {
    label: "Cadastrar Cronograma",
    link: "/create/schedule",
  },
  {
    label: "Cadastrar Funcionário",
    link: "/signup",
  },
  {
    label: "Sair",
    link: "/signin",
  },
];

const menuItemsTeacher = [
  {
    label: "Dashboard",
    link: "/",
  },
  {
    label: "Cadastrar Treino",
    link: "/create/drill",
  },
  {
    label: "Sair",
    link: "/signin",
  },
];

const menuItemsStudent = [
  {
    label: "Dashboard",
    link: "/",
  },
  {
    label: "Sair",
    link: "/signin",
  },
];

interface Props {
  open: boolean;
  close: any;
}

const LeftMenu: React.FC<Props> = ({ open, close }) => {
  const [expand, retract] = useState<number>(0);
  const [menuItems, setMenuItems] = useState<any>([]);

  const { user } = useSelector((state: RootState) => state.auth);

  function selectMenuItems() {
    switch (user?.enum_user) {
      case 0:
        setMenuItems(menuItemsStudent);
        break;
      case 1:
        setMenuItems(menuItemsTeacher);
        break;
      case 2:
        setMenuItems(menuItemsSecretary);
        break;
      case 3:
        setMenuItems(menuItemsDoctor);
        break;

      default:
        break;
    }
  }

  useEffect(() => {
    open ? retract(0) : retract(-250);
  }, [open]);

  useEffect(() => {
    console.log({ user });
    selectMenuItems();
  }, [user]);

  return (
    <LeftMenuContainer style={{ transform: `translateX(${expand}px)` }}>
      <Container>
        <FiX onClick={close} size={23} cursor="pointer" />
      </Container>
      {menuItems?.map((menu: Item) => (
        <MenuItem link={menu.link} key={menu.label} label={menu.label} />
      ))}
    </LeftMenuContainer>
  );
};

const LeftMenuContainer = styled.div`
  width: 230px;
  height: 120vh;
  background-color: #fff;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.24);
  position: fixed;
  transition: 0.6s ease-in;
`;

const Container = styled.div`
  padding: 7px;
  display: flex;
  justify-content: flex-end;

  svg:hover {
    color: #a38d65;
  }
`;
export default LeftMenu;
