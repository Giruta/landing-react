import styled from "styled-components";
import present from "../../assets/present.jpg";

export const StyledSection = styled.section`
  padding: 25px 0;
`
export const StyledContactInfo = styled.div`
  background-color: rgba(207, 217, 242, 0.87);
  padding: 21px 15px;
  color: #fff;
  border: none;
`
export const StyledCardHeader = styled.div`
  border-bottom: 2px solid rgba(256, 256, 256, 0.22);
  border-radius: 1px;
`
export const StyledCardMain = styled.div`
  padding-top: 30px;
  justify-content: space-between;
`
export const StyledList = styled.ul`
  display: flex;
  justify-content: end;
  & li a {
    color: #fff;
    display: flex;
    width: 35px;
    height: 35px;
    transition: all 0.5s ease;
    & svg {
      width: 100%;
      height: 100%;
    }
  }
  & li:hover a {
    color: #d07081;
    border: 2px solid #d07081;
  }
`
export const StyledCardContact = styled.div`
  width: 100%;
  font-size: 16px;
  & .card_phone {
    color: white;
    font-size: 16px;
    padding-left: 8px;
    margin-bottom: 2px;
    display: block;
  }
  & a {
    text-decoration: none;
    color: #fff;
    &:hover {
      color: #d07081;
    }
  }
  @media (max-width: 576px) {
    width: 100%;
  }
`

export const StyledCardText = styled.div`
  max-width: 290px;
  font-size: 14px;
  padding-left: 3px;
`
