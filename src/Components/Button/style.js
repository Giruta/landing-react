import styled from "styled-components";

export const StyledButton = styled.button`
  margin-top: 23px;
  display: inline-block;
  transition: all 1s ease;
  background: #d07081;
  font-size: 1.2rem;
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0.75rem 1rem;
  border-radius: 0.3rem;
  box-shadow: none;
  
  & a {
    color: white;
    text-decoration: none;
  }
  &:hover {
    background-color: #964754;
    box-shadow: 0 4px #990000;
    transition: 0.5s;
  }
`;
