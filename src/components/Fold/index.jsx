import * as S from "./styles";

export const Fold = ({ children, styles }) => {
  return <S.Container style={styles}>{children}</S.Container>;
};
