import React, { Component } from "react";
import {Carousel, Col, Container, Row} from "react-bootstrap";
import {StyledSection, StyledTitle} from "./style";

import slider_1 from '../../assets/slider_1.jpeg';
import slider_2 from '../../assets/slider_2.jpeg';
import slider_3 from '../../assets/slider_3.jpeg';
import slider_4 from '../../assets/slider_4.jpeg';
import slider_5 from '../../assets/slider_5.jpeg';

export default class Slider extends Component {
  render() {
    const sliderTitle = this.props.content;
    return (
      <>
        <StyledSection id='slider'>
          <Container>
            <Row className='justify-content-center'>
              <Col lg={10} md={12} className='text-center'>
                <StyledTitle>{sliderTitle ? sliderTitle : ''}</StyledTitle>
              </Col>
            </Row>
            <Row>
              <Col lg={10} className='m-auto'>
                <Carousel>
                  <Carousel.Item>
                    <img
                      className='d-block w-100'
                      src={ slider_1 }
                      alt="slider1"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className='d-block w-100'
                      src={ slider_2 }
                      alt="slider2"
                    />
                  </Carousel.Item><Carousel.Item>
                  <img
                    className='d-block w-100'
                    src={ slider_3 }
                    alt="slider3"
                  />
                </Carousel.Item><Carousel.Item>
                  <img
                    className='d-block w-100'
                    src={ slider_4 }
                    alt="slider4"
                  />
                </Carousel.Item><Carousel.Item>
                  <img
                    className='d-block w-100'
                    src={ slider_5 }
                    alt="slider5"
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
