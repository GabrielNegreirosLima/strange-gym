import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface LeftMenuItem {
	label: string;
	link: string;
}

const MenuItem: React.FC<LeftMenuItem> = ({ label, link }: LeftMenuItem) => {
	return (
		<LeftMenuItemContainer>
			<Link to={link}>
				<LeftMenuItemText>{label}</LeftMenuItemText>
			</Link>
		</LeftMenuItemContainer>
	);
};

export const LeftMenuItemContainer = styled.div`
	height: 48px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const LeftMenuItemText = styled.span`
	color: #343a40;
`;

export default MenuItem;
