import styled from 'styled-components';

export const StyledSection = styled.section`
  padding: 40px 0;
`
export const StyledTitle = styled.h3`
  margin: 20px 0;
  text-align: center;

  @media (max-width: 991px) {
    margin-bottom: 50px;
  }
  @media (max-width: 576px) {
    font-size: 1.4rem;
  }
  @media (max-width: 390px) {
    font-size: 1.2rem;
  }
`

export const StyledListGroup = styled.ul`
  list-style: disc;
  & li {
    padding: 10px 0;
  }
`

export const StyledImg = styled.img`
  width: 100%;
  max-height: 500px;
  max-width: 370px;
`
