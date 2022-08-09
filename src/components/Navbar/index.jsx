import { Brand } from "../Brand";
import { MenuMobile } from "../MenuMobile";

import * as S from "./styles";

export const Navbar = () => {
  return (
    <S.NavbarContainer>
      <MenuMobile />
      <Brand />
      <S.NavDesktop>
        <S.NavLinksList>
          <S.NavListItem>
            <S.NavLink>About</S.NavLink>
          </S.NavListItem>
          <S.NavListItem>
            <S.NavLink>Models</S.NavLink>
          </S.NavListItem>
          <S.NavListItem>
            <S.NavLink>Guarantee</S.NavLink>
          </S.NavListItem>
        </S.NavLinksList>
      </S.NavDesktop>
    </S.NavbarContainer>
  );
};
