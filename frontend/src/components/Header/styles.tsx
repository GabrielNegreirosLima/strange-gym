import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 96px;
	background-color: #fff;
	box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.24);
	padding: 8px 16px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const Logo = styled.img.attrs({
	src: process.env.PUBLIC_URL + "/assets/logo.png",
})`
	width: 50px;
	height: 50px;
	cursor: pointer;
`;

export const LogoCefet = styled.img.attrs({
	src: process.env.PUBLIC_URL + "/assets/logo-cefetmg.png",
})`
	width: 50px;
	height: 35px;
`;
