import React from "react";
import { FiMenu } from "react-icons/fi";
import styled from "styled-components";

import LeftMenu from "../Sidebar";
import { Logo, LogoCefet } from "./styles";

const Header: React.FC = () => {
	const [open, close] = React.useState<boolean>(false);
	const handleSidebar = () => {
		close(!open);
	};
	return (
		<>
			<LeftMenu open={open} close={handleSidebar} />
			<Container>
				<FiMenu
					style={{ alignSelf: "center", marginLeft: "7px" }}
					size={25}
					onClick={handleSidebar}
				/>
				<Logo style={{ alignSelf: "center", justifySelf: "center" }} />
				<LogoCefet
					style={{
						alignSelf: "center",
						justifySelf: "flex-end",
						marginRight: "10px",
					}}
				/>
			</Container>
		</>
	);
};

const Container = styled.div`
	width: 100%;
	height: 60px;
	background-color: #fff;
	box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.24);
	display: grid;
	grid-template-columns: 33% 33% 33%;
	justify-content: space-between;
	svg:hover {
		color: #a38d65;
		cursor: pointer;
	}
`;

export default Header;
