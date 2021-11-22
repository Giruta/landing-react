import styled from "styled-components";
import present from '../../assets/present.jpg';

export const StyledSection = styled.section`
  background: url(${present}) no-repeat center center/cover;
  height: 53vh;
  position: relative;

  @media (max-width: 576px) {
    height: 42vh;
  }
`
export const StyledDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  min-height: 53vh;
  background: rgb(220 220 220 / 39%);
  width: 100%;
  padding: 60px 10px;
`
