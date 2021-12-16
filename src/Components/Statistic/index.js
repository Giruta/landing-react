import React, {useEffect} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {StyledNumber, StyledSection} from "./style";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Button from "../Button";

const Statistic = (props) => {
  useEffect(()=> {
    Aos.init({ duration: 2000 });
  }, []);
  const statistic = props.content;
  return (
    <>
      <StyledSection data-aos='slide-up' id="statistic">
        <Container>
          <Row className='text-center'>
            <Col lg={3} md={6}>
              <StyledNumber><span className="people">{statistic ? statistic.first.number : ''}</span>{statistic ? statistic.first.span : ''}</StyledNumber>
              <p>{statistic ? statistic.first.info : ''}</p>
            </Col>
            <Col lg={3} md={6}>
              <StyledNumber><span className="years">{statistic ? statistic.second.number : ''}</span>{statistic ? statistic.second.span : ''}</StyledNumber>
              <p className="statistic_text">{statistic ? statistic.second.info : ''}</p>
            </Col>
            <Col lg={3} md={6}>
              <StyledNumber><span className="time">{statistic ? statistic.third.number : ''}</span>{statistic ? statistic.third.span : ''}</StyledNumber>
              <p className="statistic_text">{statistic ? statistic.third.info : ''}</p>
            </Col>
            <Col lg={3} md={6}>
              <StyledNumber><span className="days">{statistic ? statistic.fourth.number : ''}</span>{statistic ? statistic.fourth.span : ''}</StyledNumber>
              <p className="statistic_text">{statistic ? statistic.fourth.info : ''}</p>
            </Col>
          </Row>
          <Button text={statistic ? statistic.btn : ''} />
        </Container>
      </StyledSection>
    </>
  )
}
export default Statistic;
