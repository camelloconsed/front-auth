import React, { Fragment } from 'react'
import { Container, Col, Navbar, Row, Image, Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Logo from './../../images/logo-survi.png'

const CreatePassword = () => {
  return (
    <Fragment>
      <Navbar bg="white" variant="light" className="shadow-sm">
        <Navbar.Brand>
          <Image src={Logo} width="160" height="24" />
        </Navbar.Brand>
      </Navbar>
      <Container>
        <Row className="mt-4">
          <Col sm="6" className="mx-auto">
            <Card className="shadow-sm border-0">
              <Card.Body className="py-5">
                <Form>
                  <Form.Row>
                    <Col sm="8" className="mx-auto">
                      <h5 className="text-center">Crea tu contraseña</h5>
                      <p className="text-center mb-5">
                        Crea una nueva contraseña para tu cuenta
                      </p>
                    </Col>
                  </Form.Row>
                  <Form.Row className="mb-4">
                    <Form.Group controlId="formBasicEmail" className="col-sm-8 mx-auto">
                      <Form.Label>Nueva contraseña</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Ingresa tu nueva contraseña"
                      />
                      <Form.Text className="text-muted">
                        Tu contraseña debe tener entre 8-20 carácteres.
                      </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail" className="col-sm-8 mx-auto">
                      <Form.Label>Repetir contraseña</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Repite tu nueva contraseña"
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Col sm="8" className="col-sm-8 mx-auto">
                      <Link to="/successpassword" className="btn btn-primary btn-block">
                        Crear contraseña
                      </Link>
                    </Col>
                  </Form.Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default CreatePassword
