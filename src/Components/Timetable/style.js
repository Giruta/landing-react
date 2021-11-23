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

// export const StyledCol = styled.col`
//   //padding: 10px 0;
//   //position: relative;
//
//   &:nth-child(odd) {
//     text-align: right;
//     padding-right: 40px;
//   }
//   &:nth-child(odd)::before {
//     right: -2px;
//   }
//   &::before {
//     content: "●";
//     position: absolute;
//     width: 3px;
//     height: 100%;
//     background-color: #d07081;
//     color: #d07081;
//     font-size: 20px;
//     line-height: 32%;
//     text-indent: -6px;
//   }
//   &:last-child::before {
//     height: 0;
//   }
//   &:nth-child(even) {
//     margin-left: 50%;
//     padding-left: 40px;
//   }
//   &:nth-child(even)::before {
//     left: -1px;
//   }
//   & p {
//     line-height: 1.4;
//     margin: 4px 0 0 0;
//   }
//
//   @media (max-width: 576px) {
//     &:nth-child(odd)::before {
//       left: -1px;
//     }
//     &:nth-child(even)::before {
//       left: -1px;
//     }
//     &:nth-child(even) {
//       margin-left: 0;
//     }
//     &:nth-child(odd) {
//       text-align: left;
//       padding-left: 40px;
//       padding-right: 0;
//     }
//   }
// `
