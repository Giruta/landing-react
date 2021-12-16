import React, {useEffect} from "react";
import {StyledSection, StyledSubtitle, StyledList} from "./style";
import {Col, Container, Row} from "react-bootstrap";
import {BsCheckLg} from "react-icons/bs";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Button from "../Button";

const Goals = (props) => {
  useEffect(()=> {
    Aos.init({ duration: 2000 });
  }, []);
  const goals = props.content;
  return (
    <>
      <StyledSection id="goals">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10} md={12}>
              <h3 className="text-center">{goals.title ? goals.title : ''}</h3>
              <StyledSubtitle className="text-center">{goals.subtitle ? goals.subtitle : ''}
              </StyledSubtitle>
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={12}>
              <StyledList data-aos='fade-right'>
                <li data-aos='slide-right'>
                  <BsCheckLg />
                  <div className="goals_text">
                    <h5>{goals.list.first.title ? goals.list.first.title : ''}</h5>
                    <p>{goals.list.first.info ? goals.list.first.info : ''}</p>
                  </div>
                </li>
                <li data-aos='slide-right'>
                  <BsCheckLg />
                  <div className="goals_text">
                    <h5>{goals.list.second.title ? goals.list.second.title : ''}</h5>
                    <p>{goals.list.second.info ? goals.list.second.info : ''}</p>
                  </div>
                </li>
              </StyledList>
            </Col>
            <Col lg={6} md={12}>
              <StyledList data-aos='fade-left'>
                <li data-aos='slide-left'>
                  <BsCheckLg />
                  <div className="goals_text">
                    <h5>{goals.list.third.title ? goals.list.third.title : ''}</h5>
                    <p>{goals.list.third.info ? goals.list.third.info : ''}</p>
                  </div>
                </li>
                <li data-aos='slide-left'>
                  <BsCheckLg />
                  <div className="goals_text">
                    <h5>{goals.list.second.title ? goals.list.second.title : ''}</h5>
                    <p>{goals.list.third.info ? goals.list.third.info : ''}</p>
                  </div>
                </li>
              </StyledList>
            </Col>
          </Row>
          <Button text='Записаться' />
        </Container>
      </StyledSection>
    </>
  )
}
export default Goals;
