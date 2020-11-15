import React, { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import styled from "styled-components";
import MenuItem from "./SidebarItem";

const menuItens = [
	{
		label: "Dashboard",
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
				<MenuItem key={menu.label} label={menu.label} />
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
