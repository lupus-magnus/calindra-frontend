import { Brand } from "../Brand";
import { MenuMobile } from "../MenuMobile";

import * as S from "./styles";

export const Navbar = () => {
  return (
    <S.NavbarContainer>
      <MenuMobile />
      <Brand />
      <S.NavDesktop>
        <S.NavLink>About</S.NavLink>
        <S.NavLink>Models</S.NavLink>
        <S.NavLink>Guarantee</S.NavLink>
      </S.NavDesktop>
    </S.NavbarContainer>
  );
};
