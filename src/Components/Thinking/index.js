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
                <li><BsCheckLg />{thinking ? thinking.list.first.first : ''}</li>
                <li><BsCheckLg />{thinking ? thinking.list.first.second : ''}</li>
                <li><BsCheckLg />{thinking ? thinking.list.first.third : ''}</li>
              </StyledList>
            </Col>
            <Col data-aos='fade-left' lg={6} md={12}>
              <StyledList>
                <li><BsCheckLg />{thinking ? thinking.list.second.first : ''}</li>
                <li><BsCheckLg />{thinking ? thinking.list.second.second : ''}</li>
                <li><BsCheckLg />{thinking ? thinking.list.second.third : ''}</li>
              </StyledList>
            </Col>
          </Row>
          <Button text={thinking ? thinking.btn : ''} />
        </Container>
      </StyledSection>
    </>
  )
}
export default Thinking;
