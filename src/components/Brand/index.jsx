import * as S from "./styles";

export const Brand = () => {
  return (
    <S.Brand>
      <S.BrandLogo src="/assets/logo.svg" alt="Zutterman's logo" />
      <S.TextContainer>
        <S.BrandTitle>
          zutterman
          <S.BrandSubtitle>
            Measure Tape<S.RemoveSpacing>s</S.RemoveSpacing>
          </S.BrandSubtitle>
        </S.BrandTitle>
      </S.TextContainer>
    </S.Brand>
  );
};
