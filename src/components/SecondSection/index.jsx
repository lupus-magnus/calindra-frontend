import { useTheme } from "styled-components";
import { Fold } from "../Fold";

import * as S from "./styles";

export const SecondSection = () => {
  const theme = useTheme();
  return (
    <Fold styles={{ backgroundColor: theme.colors.blue }}>
      <S.Container>
        <S.TextContainer
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
        >
          <S.Header>
            We are Leader<S.NewLine>in Measure Tapes</S.NewLine>
          </S.Header>
          <S.Paragraph>
            There are 5x the <S.NewLine>circumference of planet</S.NewLine>{" "}
            earth in metric tapes.
          </S.Paragraph>
        </S.TextContainer>
      </S.Container>
      <S.Image
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, delay: 1, ease: "easeOut" }}
        src="/assets/metric-tape-2.png"
        alt="rolled measure tape"
      />
    </Fold>
  );
};
