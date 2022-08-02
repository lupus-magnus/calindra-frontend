import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
    from {
        opacity: 0;
        transform: translate(-1000px);
    }
    to {
        opacity: 1;
        transform: translate(0);
    }
`;

export const MenuContainer = styled.div`
  position: absolute;
  left: 24px;

  @media (min-width: 1025px) {
    display: none;
  }
`;

export const MenuButton = styled.button`
  border: none;
  background: none;
  transition: 300ms;

  ${({ isOpen }) =>
    isOpen &&
    `
    transform: rotate(90deg);
  `}

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 1025px) {
    display: none;
  }
`;

export const Menu = styled.nav`
  position: absolute;
  left: -24px;
  top: 44px;

  width: 100vw;
  background-color: ${({ theme }) => theme.colors.white};

  animation: ${slideIn} 300ms;
`;

export const NavListItem = styled.li`
  padding: 24px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavLink = styled.a`
  font-weight: 300;
  color: ${({ theme }) => theme.colors.golden};
  text-transform: uppercase;
  letter-spacing: 5.4px;

  &:hover {
    cursor: pointer;
  }
`;
