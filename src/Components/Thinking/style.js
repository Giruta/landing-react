import styled from 'styled-components';

export const StyledSection = styled.section`
  padding: 55px 0 35px;
  background-color: #cfd9f2de;
`
export const StyledTitle = styled.h3`
  margin-bottom: 25px;
`
export const StyledList = styled.ul`
  padding-left: 0;
  & li {
    padding: 10px 20px;
    font-size: 18px;
    display: flex;
    align-items: center;
    & svg {
      margin-right: 20px;
      font-size: 50px;
      color: #d07081;
    }
  }
`
