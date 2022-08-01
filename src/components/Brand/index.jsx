import * as S from "./styles";

export const Brand = () => {
  return (
    <S.Brand>
      <S.BrandLogo src="/assets/logo.svg" alt="Zutterman Logo" />
      <S.TextContainer>
        <S.BrandTitle>zutterman</S.BrandTitle>
        <S.BrandSubtitle>Measure Tapes</S.BrandSubtitle>
      </S.TextContainer>
    </S.Brand>
  );
};
