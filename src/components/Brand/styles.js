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

export const BrandTitle = styled.h1`
  font-size: 41.2px;
  font-weight: 700;
  line-height: 48px;
  text-align: center;
`;

export const BrandSubtitle = styled.span`
  display: block;
  font-weight: 300;
  font-size: 16px;
  letter-spacing: 5.4px;
  line-height: 16px;
`;

export const RemoveSpacing = styled.span`
  letter-spacing: 0;
`;

export const TextContainer = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
`;
