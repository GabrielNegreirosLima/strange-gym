import React from "react";

import styled from "styled-components";

export const LeftMenuContainer = styled.div`
  width: 120px;
  height: 100vh;
  background-color: #fff;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.24);

  padding: 8px;
`;
export const LeftMenuItemContainer = styled.div`
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LeftMenuItemText = styled.span`
  color: #343a40;
`;

const menuItens = [
  {
    label: "Dashboard",
  },
];

interface LeftMenuItem {
  label: string;
}
function LeftMenuItem({ label }: LeftMenuItem) {
  return (
    <LeftMenuItemContainer>
      <LeftMenuItemText>{label}</LeftMenuItemText>
    </LeftMenuItemContainer>
  );
}

function LeftMenu() {
  return (
    <LeftMenuContainer>
      {menuItens.map((menu) => (
        <LeftMenuItem label={menu.label} />
      ))}
    </LeftMenuContainer>
  );
}

export default LeftMenu;
