import styled from "styled-components";

export const Container = styled.footer`
  padding: 48px 160px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  color: ${({ theme }) => theme.colors.heavyGray};

  @media (max-width: 1024px) {
    padding: 40px 16px 56px 16px;
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 260px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
`;

export const FooterSection = styled.section`
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    align-items: center;
    text-align: center;
  }
`;

export const Header = styled.h4`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
`;

export const SocialLinksList = styled.ul`
  margin-top: 16px;
  display: flex;
  gap: 20px;
`;

export const SocialLinksItem = styled.li`
  display: inline-block;
`;

export const Address = styled.address`
  margin-top: 16px;
  font-size: 16px;
  line-height: 19px;
`;

export const NewLine = styled.span`
  display: block;
`;
