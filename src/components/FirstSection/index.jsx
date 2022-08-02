import { useTheme } from "styled-components";
import { Fold } from "../Fold";
import { GridContainer } from "../GridContainer";

import * as S from "./styles";

export const FirstSection = () => {
  const theme = useTheme();
  return (
    <Fold styles={{ backgroundColor: theme.colors.lightGray }}>
      <GridContainer>
        <S.Container>
          <S.Header>
            Measuring
            <S.HeaderNewLine>everything</S.HeaderNewLine>
          </S.Header>
          <S.Image src="/assets/metric-tape-1.png" alt="rolled measure tape" />
        </S.Container>
      </GridContainer>
    </Fold>
  );
};
