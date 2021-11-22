import React from "react";
import {StyledUp} from "./style";
import {BsArrowUpSquareFill} from "react-icons/all";
import {animateScroll as scroll } from "react-scroll";

const scrollToTop = () => {
  scroll.scrollToTop();
};

const Up = () => {
  return (
    <StyledUp
      onClick={scrollToTop}>
      <BsArrowUpSquareFill/>
    </StyledUp>
  )
}
export default Up;
