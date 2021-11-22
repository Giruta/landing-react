import styled from 'styled-components';

export const StyledSection = styled.section`
  padding: 35px 0 60px;
`

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  color: #041469;
  border-radius: 30px;
  background: #fff;
  padding: 42px 26px 57px;
  align-items: center;
  margin-top: 10px;
  box-shadow: 0 20px 90px #cfd9f2de;
  
  & h4 {
    font-weight: 700;
    font-size: 18px;
    text-align: center;
    margin-bottom: 20px;
  }
  
  & small {
    font-size: 12px;
  }
`
export const StyledInput = styled.input`
  width: 80%;
  border-radius: 30px;
  padding: 12px;
  border: 1px solid #041469;

  @media (max-width: 576px) {
    width: 100%;
  }
`
export const StyledSelect = styled.select`
  width: 80%;
  border-radius: 30px;
  padding: 12px;
  border: 1px solid #041469;

  @media (max-width: 576px) {
    width: 100%;
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

  @media (max-width: 576px) {
    width: 100%;
  }
`;

