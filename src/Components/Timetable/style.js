import styled from 'styled-components';

export const StyledSection = styled.section`
  padding: 50px 20px;
  & h2 {
    margin-bottom: 35px;
    font-weight: bold;
    text-align: center;
  }
  & h5 {
    font-weight: bold;
  }
  @media (max-width: 576px) {
    padding: 40px 5%;
  }
`
