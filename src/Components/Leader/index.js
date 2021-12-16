import React, {useEffect} from "react";
import lectorSecond from '../../assets/lectorSecond.webp'
import {Col, Container, Row} from "react-bootstrap";
import {StyledSection, StyledTitle, StyledImg, StyledListGroup} from "./style";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Leader = (props) => {
  useEffect(()=> {
    Aos.init({ duration: 2000 });
  }, []);
  const leader = props.content;
  return (
    <>
      <StyledSection id="leader">
        <Container>
          <Row>
            <Col data-aos='slide-right' lg={5} md={12} className='text-center'>
              <StyledImg className="leader_img" src={lectorSecond} alt="lector"/>
            </Col>
            <Col data-aos='slide-left' lg={7} md={12} className="pl-4">
              <StyledTitle>{leader ? leader.title_begin : ''} <strong>{leader ? leader.titleName : ''}</strong> {leader ? leader.title_end : ''}</StyledTitle>
              <StyledListGroup>
                <li>{leader ? leader.list.first : ''}</li>
                <li>{leader ? leader.list.second : ''}</li>
                <li>{leader ? leader.list.third : ''}</li>
                <li>{leader ? leader.list.fourth : ''}</li>
                <li>{leader ? leader.list.fifth : ''}</li>
                <li>{leader ? leader.list.sixth : ''}</li>
                <li>{leader ? leader.list.seventh : ''}</li>
              </StyledListGroup>
            </Col>
          </Row>
        </Container>
      </StyledSection>
    </>
  )
}
export default Leader;
