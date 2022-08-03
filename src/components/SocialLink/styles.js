import styled from "styled-components";

export const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.colors.heavyGray};
  transition: 300ms;

  &:hover {
    cursor: pointer;
    border: 3px solid ${({ theme }) => theme.colors.golden};
    color: ${({ theme }) => theme.colors.golden};
    transform: scale(1.05);
  }
`;
