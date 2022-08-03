import { useTheme } from "styled-components";
import { Fold } from "../Fold";

import * as S from "./styles";

export const SecondSection = () => {
  const theme = useTheme();
  return (
    <Fold styles={{ backgroundColor: theme.colors.blue }}>
      <S.Container>
        <S.TextContainer>
          <S.Header>
            We are Leader<S.NewLine>in Measure Tapes</S.NewLine>
          </S.Header>
          <S.Paragraph>
            There are 5x the <S.NewLine>circumference of planet</S.NewLine>{" "}
            earth in metric tapes.
          </S.Paragraph>
        </S.TextContainer>
      </S.Container>
      <S.Image src="/assets/metric-tape-2.png" alt="rolled measure tape" />
    </Fold>
  );
};
