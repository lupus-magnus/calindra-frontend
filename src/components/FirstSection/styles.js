import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 16px;
  }
`;

export const Header = styled(motion.h2)`
  font-size: 80px;
  font-weight: 700;
  line-height: 96px;
  color: ${({ theme }) => theme.colors.heavyGray};

  @media (max-width: 768px) {
    font-size: 52px;
    line-height: 62px;
  }

  @media (max-width: 1024px) {
    margin-top: 80px;
  }
`;

export const HeaderNewLine = styled.span`
  display: block;
`;

export const Image = styled(motion.img)`
  display: block;
  max-width: 100%;
  height: auto;

  align-self: center;
`;
