import { AnimatePresence } from "framer-motion";
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
        }}
      >
        <img src="/assets/menu.svg" alt="navigation menu" />
      </S.MenuButton>
      <AnimatePresence>
        {isOpen && (
          <S.Menu
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ ease: "easeInOut" }}
          >
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
      </AnimatePresence>
    </S.MenuContainer>
  );
};
