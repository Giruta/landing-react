import styled from 'styled-components';

export const StyledSection = styled.section`
  padding: 63px 0 40px;
  background-color: #cfd9f2de;
`
export const StyledSubtitle = styled.p`
  margin-top: 15px;
  font-style: italic;
  font-size: 1.2rem;
`
export const StyledList = styled.ul`
  padding-left: 0;
  & li {
    display: flex;
    padding: 10px 20px;
    font-size: 1rem;
    align-items: center;
    & p {
      margin-bottom: 0;
    }
    & svg {
      font-size: 10rem;
      margin-right: 20px;
      //font-size: 50px;
      color: #d07081;
    }
    & h5 {
      font-weight: 700;
    }
  }
`
