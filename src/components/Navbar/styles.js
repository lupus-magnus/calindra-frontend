import styled from "styled-components";

export const NavbarContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.golden};
  position: relative;

  height: 110px;
  padding: 0 64px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1024px) {
    justify-content: center;
    height: 57px;
  }
`;

export const NavDesktop = styled.nav`
  height: 100%;
`;

export const NavLinksList = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;

  gap: 128px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const NavListItem = styled.li`
  height: 100%;
  display: flex;
  align-items: center;

  font-weight: 300;
  color: ${({ theme }) => theme.colors.golden};
  text-transform: uppercase;
  letter-spacing: 5.4px;
  border-bottom: 3px solid transparent;
  transition: 600ms;

  &:hover {
    cursor: pointer;
    border-bottom: 3px solid ${({ theme }) => theme.colors.golden};
  }
`;

export const NavLink = styled.a`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`;
