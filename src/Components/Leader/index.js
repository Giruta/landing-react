import React, {useEffect} from "react";
import lectorSecond from '../../assets/lectorSecond.webp'
import {Col, Container, Row} from "react-bootstrap";
import {StyledSection, StyledTitle, StyledImg, StyledListGroup} from "./style";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Leader = () => {
  useEffect(()=> {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <StyledSection id="leader">
        <Container>
          <Row>
            <Col data-aos='slide-right' lg={5} md={12} className='text-center'>
              <StyledImg className="leader_img" src={lectorSecond} alt="lector"/>
            </Col>
            <Col data-aos='slide-left' lg={7} md={12} className="pl-4">
              <StyledTitle>Меня зовут <strong>Марина Мельник</strong> и я:</StyledTitle>
              <StyledListGroup>
                <li>11 лет управляет программами в международной IT-компании</li>
                <li>Получила международные сертификации Professional Scrum Master I,
                  Certified Scrum Professional и Certified Scrum Master
                </li>
                <li>Эксперт в управлении процессами, качеством, поставками,
                  персоналом, рисками и взаимоотношениями с клиентами в IT-аутсорсинге
                </li>
                <li>Когда-то тоже думала, что не умею рисовать</li>
                <li>Прошла долгий путь от всем недовольного человека до эксперта в
                  психологии счастья
                </li>
                <li>Создаю и веду курсы по саморазвитию</li>
                <li>Совершенно уверена, что в каждом из нас живет творец! И надо лишь
                  помочь ему раскрыться
                </li>
              </StyledListGroup>
            </Col>
          </Row>
        </Container>
      </StyledSection>
    </>
  )
}
export default Leader;
