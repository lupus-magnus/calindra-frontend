import { ImFacebook, ImYoutube, ImTwitter } from "react-icons/im";

import { SocialLink } from "../SocialLink";

import * as S from "./styles";

export const Footer = () => {
  return (
    <S.Container>
      <S.Content>
        <S.FooterSection>
          <S.Header>Follow Us</S.Header>
          <S.SocialLinksList>
            <S.SocialLinksItem>
              <SocialLink icon={<ImYoutube />} />
            </S.SocialLinksItem>
            <S.SocialLinksItem>
              <SocialLink icon={<ImFacebook />} />
            </S.SocialLinksItem>
            <S.SocialLinksItem>
              <SocialLink icon={<ImTwitter />} />
            </S.SocialLinksItem>
          </S.SocialLinksList>
        </S.FooterSection>
        <S.FooterSection>
          <S.Header>Contact</S.Header>
          <S.Address>
            2490 Leisure Lane<S.NewLine>San Luis Obispo</S.NewLine> California
          </S.Address>
        </S.FooterSection>
      </S.Content>
    </S.Container>
  );
};
