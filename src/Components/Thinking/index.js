import React, {useEffect} from "react";
import {StyledList, StyledSection} from "./style";
import {Col, Container, Row} from "react-bootstrap";
import {BsCheckLg} from "react-icons/bs";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Button from "../Button";

const Thinking = (props) => {
  useEffect(()=> {
    Aos.init({ duration: 2000 });
  }, []);
  const thinking = props.content;
  return (
    <>
      <StyledSection id="thinking">
        <Container>
          <Row>
            <Col md={12}>
              <h3 className="text-center mb-4">{thinking ? thinking.title : ''}</h3>
            </Col>
          </Row>
          <Row>
            <Col data-aos='fade-right' lg={6} md={12}>
              <StyledList>
                <li><BsCheckLg /></li>
                <li><BsCheckLg /></li>
                <li><BsCheckLg /></li>
              </StyledList>
            </Col>
            <Col data-aos='fade-left' lg={6} md={12}>
              <StyledList>
                <li><BsCheckLg /></li>
                <li><BsCheckLg /></li>
                <li><BsCheckLg /></li>
              </StyledList>
            </Col>
          </Row>
          <Button text='Записаться' />
        </Container>
      </StyledSection>
    </>
  )
}
export default Thinking;
