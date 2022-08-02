import { useState } from "react";
import * as S from "./styles";

export const MenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.MenuContainer>
      <S.MenuButton
        isOpen={isOpen}
        onClick={() => {
          setIsOpen((prev) => !prev);
          console.log(isOpen);
        }}
      >
        <img src="/assets/menu.svg" alt="navigation menu" />
      </S.MenuButton>
      {isOpen && (
        <S.Menu>
          <ul>
            <S.NavListItem>
              <S.NavLink>About</S.NavLink>
            </S.NavListItem>
            <S.NavListItem>
              <S.NavLink>Models</S.NavLink>
            </S.NavListItem>
            <S.NavListItem>
              <S.NavLink>Guarantee</S.NavLink>
            </S.NavListItem>
          </ul>
        </S.Menu>
      )}
    </S.MenuContainer>
  );
};
