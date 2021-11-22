import styled from 'styled-components';

export const StyledSection = styled.section`
  padding: 40px 0;
  overflow-x: hidden;
`
export const StyledList = styled.ul`
  padding-left: 0;
  & li{
    padding: 10px 20px;
    font-size: 18px;
    display: flex;
    align-items: center;
  }
  & li svg {
    margin-right: 20px;
    font-size: 50px;
    color: #d07081;
  }
`
