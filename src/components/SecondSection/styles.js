import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  display: flex;
  align-items: flex-end;
  gap: 24px;

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  margin-top: 448px;
  padding-left: 160px;
  padding-bottom: 216px;

  @media (max-width: 1024px) {
    margin-top: 80px;
    padding: 16px;
  }
`;

export const Header = styled.h2`
  font-size: 68px;
  font-weight: 700;
  line-height: 96px;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 768px) {
    font-size: 40px;
    line-height: 48px;
  }
`;

export const NewLine = styled.span`
  display: block;
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.white};

  font-weight: 300;
  font-size: 48px;
  line-height: 56px;

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  position: absolute;
  top: 80px;
  right: 0;

  mix-blend-mode: multiply;

  @media (max-width: 1024px) {
    top: 496px;
  }

  @media (max-width: 768px) {
    top: 328px;
  }
`;
