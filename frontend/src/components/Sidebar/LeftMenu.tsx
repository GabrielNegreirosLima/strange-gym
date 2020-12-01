import React, { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import styled from "styled-components";
import MenuItem from "./SidebarItem";

const menuItens = [
	{
		label: "Dashboard",
		link: "/",
	},
	{
		label: "Teste Fisico",
		link: "/create/fisical-test",
	},
	{
		label: "Cadastrar Studante",
		link: "/create/student",
	},
	{
		label: "Cadastro Modalidade",
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
		link: "/create/class",
		label: "Cadastrar Turma",
	},
	{
		label: "Cadastrar Treino",
		link: "/create/drill",
	},
	{
		label: "Cadastrar Cronograma",
		link: "/create/schedule",
	},
	{
		label: "Cadastrar Funcionário",
		link: "/signup",
	},
];

interface Props {
	open: boolean;
	close: any;
}

const LeftMenu: React.FC<Props> = ({ open, close }) => {
	const [expand, retract] = useState<number>(0);

	useEffect(() => {
		open ? retract(0) : retract(-250);
	}, [open]);

	return (
		<LeftMenuContainer style={{ transform: `translateX(${expand}px)` }}>
			<Container>
				<FiX onClick={close} size={23} cursor="pointer" />
			</Container>
			{menuItens.map((menu) => (
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
