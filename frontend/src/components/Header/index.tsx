import React from "react";
import { FiMenu } from "react-icons/fi";

import LeftMenu from "../Sidebar/LeftMenu";
import { Container, Logo, LogoCefet } from "./styles";

const Header: React.FC = () => {
	const [open, close] = React.useState<boolean>(false);
	const handleSidebar = () => {
		close(!open);
	};
	return (
		<>
			<LeftMenu open={open} close={close} />
			<Container>
				<Logo onClick={handleSidebar} />
				<LogoCefet />
			</Container>
		</>
	);
};

export default Header;
