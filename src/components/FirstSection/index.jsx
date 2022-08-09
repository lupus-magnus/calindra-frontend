import { useTheme } from "styled-components";
import { Fold } from "../Fold";

import * as S from "./styles";

export const FirstSection = () => {
  const theme = useTheme();
  return (
    <Fold styles={{ backgroundColor: theme.colors.lightGray }}>
      <S.Container>
        <S.Header
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", delay: 1.25 }}
        >
          Measuring
          <S.HeaderNewLine>everything</S.HeaderNewLine>
        </S.Header>
        <S.Image
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, type: "spring" }}
          src="/assets/metric-tape-1.png"
          alt="rolled measure tape"
        />
      </S.Container>
    </Fold>
  );
};
