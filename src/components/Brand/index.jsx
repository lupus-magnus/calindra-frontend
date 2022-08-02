import * as S from "./styles";

export const Brand = () => {
  return (
    <S.Brand>
      <S.BrandLogo src="/assets/logo.svg" alt="Zutterman's logo" />
      <S.TextContainer>
        <S.BrandTitle>zutterman</S.BrandTitle>
        <S.BrandSubtitle>Measure Tapes</S.BrandSubtitle>
      </S.TextContainer>
    </S.Brand>
  );
};
