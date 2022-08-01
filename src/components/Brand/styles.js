import styled from "styled-components";

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const BrandLogo = styled.img`
  height: 70px;
  @media (max-width: 1024px) {
    height: 40px;
  }
`;

export const BrandTitle = styled.span`
  display: inline-block;
  font-size: 41.2px;
  font-weight: 700;
  line-height: 48px;
`;

export const BrandSubtitle = styled.span`
  display: inline-block;
  letter-spacing: 5.4px;
  font-weight: 300;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    display: none;
  }
`;
