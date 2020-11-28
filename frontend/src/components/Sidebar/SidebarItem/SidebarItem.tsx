import React from "react";
import styled from "styled-components";

interface LeftMenuItem {
	label: string;
}

const MenuItem: React.FC<LeftMenuItem> = ({ label }) => {
	return (
		<LeftMenuItemContainer>
			<LeftMenuItemText>{label}</LeftMenuItemText>
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
