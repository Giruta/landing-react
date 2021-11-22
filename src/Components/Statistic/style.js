import styled from 'styled-components';

export const StyledSection = styled.section`
  padding: 37px 0 30px;
  background-color: #cfd9f2de;
  overflow-x: hidden;
`
export const StyledNumber = styled.p`
  font-size: 26px;
  font-weight: 400;
  border-bottom: 3px solid #d07081;
  padding-bottom: 10px;
  
  & span {
    margin-right: 7px;
  }

  @media (max-width: 576px) {
    font-size: 20px;
    padding-bottom: 0;
    margin-bottom: 0.5rem;
  }
`
export const StyledButton = styled.button`
  margin-top: 23px;
  display: inline-block;
  letter-spacing: 0;
  transition: all 1s ease;
  background: #d07081;
  border-radius: 30px;
  padding: 10px 40px;
  font-size: 1.2rem;
  text-transform: uppercase;
  text-decoration: none;
  color: #041469;
  outline: none;
  border: none;
  cursor: pointer;
`;
