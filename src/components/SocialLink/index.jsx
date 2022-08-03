import React from "react";

import * as S from "./styles";

export const SocialLink = ({ icon }) => {
  return <S.SocialLink>{React.cloneElement(icon, { size: 24 })}</S.SocialLink>;
};
