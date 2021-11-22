import React, { Component } from "react";
import {StyledSection} from "./style";
import {Carousel, Col, Container, Row} from "react-bootstrap";
import review_1 from "../../assets/review_1.jpg";
import review_2 from "../../assets/review_2.jpg";

export default class Reviews extends Component {
  render() {
    return (
      <>
        <StyledSection id="reviews">
          <Container>
            <Row className="justify-content-center">
              <Col lg={10} md={12} className="text-center">
                <h3>Они тоже сомневались</h3>
              </Col>
            </Row>
            <Row>
              <Col lg={10} className='m-auto'>
                <Carousel>
                  <Carousel.Item>
                    <img
                      className='d-block w-100'
                      src={ review_1 }
                      alt="slider1"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className='d-block w-100'
                      src={ review_2 }
                      alt="slider1"
                    />
                  </Carousel.Item>
                </Carousel>
              </Col>
            </Row>
          </Container>
        </StyledSection>
      </>
    )
  }
}
