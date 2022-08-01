import styled from "styled-components";

export const NavbarContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.golden};
  border: 1px solid red;
  height: 110px;
  padding: 0 64px;

  display: flex;
  align-items: center;
`;
