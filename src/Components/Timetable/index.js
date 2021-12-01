import React, {useEffect} from "react";
import {StyledSection} from "./style";
import {Col, Container, Row} from "react-bootstrap";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Button from "../Button";

const Timetable = () => {
  useEffect(()=> {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <StyledSection id="timetable">
        <Container>
          <Row>
            <Col md={12}>
              <h2>Программа занятий</h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={10} md={12}>
              <Row className='styled-row'>
                <Col data-aos='slide-right' xs={12} sm={6} className="timeline-item">
                  <h5>Знакомство с мандалой</h5>
                  <p>Первые узоры, как победить критика-перфекциониста</p>
                </Col>
                <Col data-aos='slide-left' xs={12} sm={6} className="timeline-item">
                  <h5>Растительные узоры и глубина</h5>
                  <p>Рисование на черной бумаге, как перестать сравнивать с ебя с другими</p>
                </Col>
                <Col data-aos='slide-right' xs={12} sm={6} className="timeline-item">
                  <h5>Объемные узоры</h5>
                  <p>Как обходиться без ожиданий</p>
                </Col>
                <Col data-aos='slide-left' xs={12} sm={6} className="timeline-item">
                  <h5>АТС-ки или карточки для обмена</h5>
                  <p>Рассылаем "живые" письма ко всему миру</p>
                </Col>
                <Col data-aos='slide-right' xs={12} sm={6} className="timeline-item">
                  <h5>Рисование узоров в контуре руки</h5>
                  <p>Выходить за пределы зоны комфорта</p>
                </Col>
                <Col data-aos='slide-left' xs={12} sm={6} className="timeline-item">
                  <h5>Геометрические узоры</h5>
                  <p>Как не бояться сделать ошибку и прокачивать интуицию</p>
                </Col>
                <Col data-aos='slide-right' xs={12} sm={6} className="timeline-item">
                  <h5>Новые растительные узоры</h5>
                  <p>Жить со скоростью ребенка</p>
                </Col>
                <Col data-aos='slide-left' xs={12} sm={6} className="timeline-item">
                  <h5>Рисование мандалы</h5>
                  <p>Как творчество помогает нам понять себя</p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Button text='Записаться' />
        </Container>
      </StyledSection>
    </>
  )
}
export default Timetable;
