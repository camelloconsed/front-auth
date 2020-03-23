import React, { Fragment } from 'react'
import { Container, Col, Navbar, Row, Image, Button } from 'react-bootstrap'

import Logo from './../../images/logo-survi.png'
import SuccessImg from './../../images/success-password.svg'

const UseBodyWhite = () => {
  return (document.body.style.backgroundColor = '#fff')
}

const SuccessPasword = () => {
  UseBodyWhite()
  return (
    <Fragment>
      <Navbar bg="white" variant="light" className="shadow-sm">
        <Navbar.Brand>
          <Image src={Logo} width="160" height="24" />
        </Navbar.Brand>
      </Navbar>
      <Container>
        <Row className="mt-4">
          <Col sm="6" className="mx-auto text-center">
            <Image src={SuccessImg} className="d-block mx-auto mb-4" />
            <h5>¡Genial!</h5>
            <p className="mb-4">Has creado tu nueva contraseña con éxito</p>
            <Button variant="primary">Ir a inicio</Button>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default SuccessPasword
