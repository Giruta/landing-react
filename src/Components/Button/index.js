import React from 'react';
import {StyledButton} from "./style";
import { Link } from "react-scroll";
import {Col, Row} from "react-bootstrap";


const Button = (props) => {
  return (
    <Row className="row d-flex justify-content-center">
      <Col lg={12} className='text-center'>
        <StyledButton>
          <Link
            to="signup"
            spy={true}
            smooth={true}
            offset={-70}
            duration={2000}
          >
            {props.text}
          </Link>
        </StyledButton>
      </Col>
    </Row>
  )
}
export default Button;
