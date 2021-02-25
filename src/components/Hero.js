import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import face from '../images/face.jpg'
import '../pages/Home.scss'

//make the text fluid as well, its big in all screen sizes

function Hero(props){
    return(
        <Jumbotron className="bg-gray jumbotron-fluid">
            <Container fluid={true}>
                <Row>
                <Col md={3} sm={5}>
                    <img class="rounded-circle img-fluid" aspectRatio="16by9" src={face} alt="" />
                </Col>
                <Col className="justify-content-center align-items-center" fluid={true} md={8} sm={12}>
                    { props.title && <h1 className="font-weight-bolder">{props.title}</h1> }
                    { props.subTitle && <h3 className="font-weight-light">{props.subTitle}</h3> }
                </Col>
                </Row>
            </Container>
        </Jumbotron>
        )
        
}



export default Hero