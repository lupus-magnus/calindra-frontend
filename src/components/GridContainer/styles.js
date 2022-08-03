import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1440px;

  height: 100%;

  margin: 0 auto;
  padding: 0 64px;

  @media (max-width: 1024px) {
    padding: 0 16px;
  }
`;
