import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import face from '../images/face.jpg'

//make the text fluid as well, its big in all screen sizes

function Hero(props){
    return(
        <Jumbotron className="bg-gray jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="py-5">
                <Col md={3} sm={5}>
                    <img class="rounded-circle img-fluid" aspectRatio="16by9" src={face} alt="" />
                </Col>
                <Col className="justify-content-center align-items-center" fluid={true} md={6} sm={10}>
                    { props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1> }
                    { props.subTitle && <h3 className="display-4 font-weight-light">{props.subTitle}</h3> }
                </Col>
                </Row>
            </Container>
        </Jumbotron>
        )
        
}



export default Hero