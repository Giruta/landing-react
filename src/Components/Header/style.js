import styled from 'styled-components';

export const StyledHeader = styled.header`
  height: 74vh;
  padding: 56px 0 15px;
  left: 0;
  right: 0;
  z-index: 1;
  box-shadow: inset 0 0 5px 1px #58647a;
  background: url("../../assets/headerBg.jpeg") no-repeat;
  position: relative;
  color: #d07081;

  @media (max-width: 991px) {
    height: 60vh;
  }
`;

export const StyledImg = styled.img`
  position: absolute;
  right: 10%;
  bottom: 0;
  text-align: end;
  width: 45%;

  @media (min-width: 767px) {
    width: 353px;
    right: 3%;
  }
  @media (max-width: 991px) {
    width: 309px;
    right: 10%;
  }
  @media (max-width: 767px) {
    width: 42%;
  }
  @media (max-width: 576px) {
    width: 55%;
    right: 0;
  }
  @media (max-width: 390px) {
    width: 70%;
  }
`
export const StyledInner = styled.div`
  color: #041469;
  width: 60%;
  margin-top: 8%;
  
  @media (max-width: 767px) {
    width: 66%;
    margin-top: 5%;
  }
  @media (max-width: 576px) {
    width: 52%;
    margin-top: 20px;
  }
  @media (max-width: 390px) {
    width: 37%;
  }
`
export const StyledTitle = styled.h1`
  margin: 50px 0 0;
  color: #d07081;
  
  @media (max-width: 991px) {
    margin-top: 0;
    font-size: 2.2rem;
  }
`
export const StyledSpan = styled.span`
  font-style: italic;
  font-size: 1.4rem;
  font-weight: 100;
  text-transform: capitalize;
  color: #d07081;
  letter-spacing: 0.2rem;
  line-height: 55px;
  
  @media (max-width: 991px) {
    font-size: 1.0rem;
    line-height: 2rem;
  }
  @media (max-width: 576px) {
    line-height: 1rem;
  }
`
export const StyledText = styled.p`
  font-size: 2rem;
  margin: 3% 0 6%;
  font-weight: 600;

  @media (max-width: 991px) {
    margin: 4% 0;
    font-size: 1.7rem;
  }
  @media (max-width: 576px) {
    font-size: 1.1rem;
  }
  @media (max-width: 390px) {
    font-size: 0.8rem;
    margin: 15px 0 20px;
  }
`
export const StyledButton = styled.button`
  letter-spacing: 0;
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

  &:hover {
    background-color: #964754;
    box-shadow: 0 4px #990000;
    transition: 0.5s;
  }
  
  @media (max-width: 767px) {
    padding: 5px 10px;
    font-size: 1rem;
    margin-top: 5px;
  }
  @media (max-width: 576px) {
    font-size: 0.8rem;
  }
  @media (max-width: 390px) {
    letter-spacing: 0;
    font-size: 0.6rem;
  }
`;
